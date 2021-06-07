import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
 visible: boolean;
 renVisible:boolean;
 renEnbl:boolean;
 showHist:boolean;
 renIsAdmin:boolean;
  constructor() {
    this.visible = false
    this.renVisible=false
    this.renEnbl=false
    this.showHist=false
    this.renIsAdmin=true;
   }
   hide(){
     this.visible = false
   }
   show(){
     this.visible = true
   }
   renhide(){
    this.renVisible = false
  }
   renshow(){
    this.renVisible = true
  }
  renEnable(){
    this.renEnbl = true
  }
   renDisable(){
    this.renEnbl =false
  }
  histShow(){
    this.showHist = true
  }
  histHide(){
    this.showHist = false
  }
  renIsAdminShow(){
    this.renIsAdmin=true;
  }
  renIsAdminHide(){
    this.renIsAdmin=false;
  }
}
