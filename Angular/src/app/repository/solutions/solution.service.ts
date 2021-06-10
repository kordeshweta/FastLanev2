import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  constructor(private http: HttpClient) {}

  getComponentData(practices) {
    return this.http.post(`${environment.apiUrl}solutions`,{practices});
    // return this.http.get('../assets/Data/data.Json');
  }
}
