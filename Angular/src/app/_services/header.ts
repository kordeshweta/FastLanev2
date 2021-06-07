import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService{
    border:boolean;
    text:boolean;
    constructor(){
        this.border=false;
        this.text=false;
    }
    applyBorder(){
        this.border=true;
    }
    applyText(){
        this.text=true;
    }
}