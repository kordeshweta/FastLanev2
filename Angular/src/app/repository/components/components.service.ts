import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  constructor(private http: HttpClient) {}

  /*getComponentData() {
    console.log("environment.apiUrl",environment.apiUrl)
    return this.http.post(`${environment.apiUrl}components`,{});
    // return this.http.get('../assets/Data/data.Json');
  }*/
  getComponentData(practices) {
    console.log("environment.apiUrl",environment.apiUrl)
    return this.http.post(`${environment.apiUrl}components`,{practices});
    // return this.http.get('../assets/Data/data.Json');
  }
}
