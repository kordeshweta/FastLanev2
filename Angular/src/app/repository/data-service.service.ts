import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataServiceService {

    defaultData: any = {};
    deletableImages = [];
    deletableFiles = [];
    private dataSource = new BehaviorSubject<any>(this.defaultData);

    // use below data to subscribe in form component
    data = this.dataSource.asObservable();

    constructor() { }

    setTechnologyData(data){
        this.dataSource.next(data);
    }
    setDeletableImages(x){
        this.deletableImages.push(x);
    }
    setDeletableFiles(x){
        this.deletableFiles.push(x);
    }
    resetDeletableImages(){
        this.deletableImages = [];
        this.deletableFiles = [];
    }
}
