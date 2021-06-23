import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_services';
import { AppService } from '../app.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private appService: AppService, private adal: MsAdalAngular6Service) { }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
    });
    // add auth header with jwt if user is logged in and request is to api url
    let token = sessionStorage['adal.idtoken'];
    // const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    const isUpload = request.url.endsWith('/uploads/image') || request.url.endsWith('/uploads/file') ||  request.url.endsWith('/uxSubCategory/addUpdateImage') ||  request.url.endsWith('/uxUpload/add');

    // get api url from adal config
    const resource = this.adal.GetResourceForEndpoint(request.url);
    if (!resource || !this.adal.isAuthenticated) {
      return next.handle(request).pipe(catchError((err)=>{
        if(err['status'] == 403 || err['status'] == 401)
        {
          this.adal.login();
        }
        return throwError
      }));
    } 

    // merge the bearer token into the existing headers
    return this.adal.acquireToken(resource).pipe(mergeMap((token: string) => {
      if (token && isApiUrl) {
        if (isUpload) {
          request = request.clone({
            setHeaders: {
              'Authorization': token,
            },
          });
        } else {
          request = request.clone({
            setHeaders: {
              'Authorization': token,
              "Content-Type": "application/json"
            },
          });
        }
      }
      return next.handle(request);
    }));



    // return next.handle(request).pipe(catchError((err) => {
    //   if ([401, 403].indexOf(err.status) !== -1) {
    //     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    //     if(err.status == 401 && err.name == "TokenExpiredError"){
    //       // this.appService.refreshToken();
    //     }else{
    //       this.authService.logout();
    //     }
    //     // location.reload(true);
    //   }
    //   const error = err.error.message || err.statusText;
    //   return throwError(error);
    // }));
  }
}
