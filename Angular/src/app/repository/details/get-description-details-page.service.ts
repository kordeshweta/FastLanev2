import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GetDescriptionDetailsPageService {
  constructor(private http: HttpClient) {}

  getDescriptionFullDetailsPage(details) {
    return this.http.get(
      `${environment.apiUrl}${details.compType}/${details.Id}`
    );
  }

  getDownloadFiles(category,fileId,payload): Observable<Blob> {
    // debugger;
    return this.http
      .post(`${environment.apiUrl}download/file/${category}/${fileId}`, payload,{ 
        responseType: 'blob',
      })
      .pipe(
        tap(
          (data) => console.log('You received data'),
          (error) => console.log(error)
        )
      );
  }
}
