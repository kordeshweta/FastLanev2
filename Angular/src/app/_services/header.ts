import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService{

    show_head: BehaviorSubject<boolean> = new BehaviorSubject(true);
    nStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
    getntStatus = this.nStatus.asObservable();
    Head_visible(){
        this.show_head.next(true);
    }

    Head_invisible(){
        this.show_head.next(false);
    }
    hDisplay(){
        this.nStatus.next(true);
    }
    hNotDisplay(){
        this.nStatus.next(false);
    }
    constructor(){

    }

}
