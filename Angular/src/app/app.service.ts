import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    isAdmin() {
        return this.http.get(`${environment.apiUrl}isAdmin`);
    }

    getSiteVisitCount(){
        return this.http.get(`${environment.apiUrl}/siteVisit`);
    }

    refreshToken() {

    }
}
