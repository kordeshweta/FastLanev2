import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { forkJoin, Observable } from 'rxjs';
import { AuthenticationService } from '../_services';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComponentServicesService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}
  getProtfolioData() {
     // let baseUrl = environment.apiUrl;
     return this.http.get(`${environment.protfolioUrl}`);
 }

 getSubPortfolioData() {
  // let baseUrl = environment.apiUrl;
  return this.http.get(`${environment.subPortfolioUrl}`);
}
  getComponentData(practices): Observable<any[]> {
    let component = this.http.get(`${environment.apiUrl}components`);
    let solutions = this.http.get(`${environment.apiUrl}solutions`);
    let bestPractices = this.http.get(`${environment.apiUrl}bestPractices`);
    return forkJoin([component, solutions, bestPractices]);
    // let data = forkJoin([component, solutions, bestPractices]);
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    // let list = ['components', 'solutions', 'bestPractices'];
  }

  postFormData(post, type) {
    return this.http.post(`${environment.apiUrl}`+type, post);
  }
  editItem(id, type, post){
    return this.http.put(`${environment.apiUrl}`+type +'/' +id,post)
  }
  deleteItem(id,type){
    return this.http.delete(`${environment.apiUrl}`+type +'/' +id)
  }
  deleteImages(id, type){
    return this.http.delete(`${environment.apiUrl}`+type + '/' + id)
  }
  deleteFiles(id, type){
    return this.http.delete(`${environment.apiUrl}`+type + '/' + id)
  }
  uploadFile(fileData){
    let endPoint = null;
    let formData = new FormData();
    const baseUrl = `${environment.apiUrl}uploads`
    if(fileData.type === 'image'){
      formData.append('image', fileData.image);
      endPoint = baseUrl+'/image';
      console.log(fileData)
    } else {
      formData.append('file', fileData.file);
      endPoint = baseUrl+'/file';
      formData.append('linkText', fileData.linkText);
    }
    formData.append('entity', fileData.entity);
    formData.append('entityId', fileData.entityId);
    // const headers = new HttpHeaders({
    //   'x-access-token': this.authenticationService.currentUserValue
    //     .token
    // });
    return this.http.post(endPoint, formData);
  }
  updateFile(fileData, id){
    let endPoint = null;
    const formData = new FormData();
    const baseUrl = `${environment.apiUrl}update`
    if(fileData.type === 'image'){
      formData.append('image', fileData.image);
      endPoint = baseUrl+'/image/'+id;
      console.log(fileData)
    } else {
      formData.append('file', fileData.file);
      endPoint = baseUrl+'/file/'+id;
      formData.append('linkText', fileData.linkText);
    }
    formData.append('entity', fileData.entity);
    formData.append('entityId', fileData.entityId);
    // const headers = new HttpHeaders({
    //   'x-access-token': this.authenticationService.currentUserValue
    //     .token
    // });
    return this.http.put(endPoint, formData);
  }

  getDownloadDetails(id,category):any{
    return this.http.get(`${environment.apiUrl}` + "downloadDetail/" + category + "/" +id);
  }
  getAllDownloads():any{
    return this.http.get(`${environment.apiUrl}` + "getRepoDownloads");
  }
}
