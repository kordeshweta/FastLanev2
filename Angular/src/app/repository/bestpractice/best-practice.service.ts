import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BestPracticeService {
  constructor(private http: HttpClient) {}
  getComponentData(practices) {
    return this.http.post(`${environment.apiUrl}bestPractices`,{practices});
    // return this.http.get('../assets/Data/data.Json');
  }
}