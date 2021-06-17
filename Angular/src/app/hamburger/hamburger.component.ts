import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HeaderService } from '../_services/header';
import * as dropdown_array from '../header/constants/dropdown.json';
@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  dropdownArray;
  displayA='none';
  displayAc='none';
  width='280px';
  heightA='0px';
  heightAc='0px';
  displayd='block';
  displayu='none';
  displaydA='block';
  displayuA='none';
  fontAs='$section_content_text_font';
  fontAsu='$section_content_text_font';
  fontAc='$section_content_text_font';
  fontAcu='$section_content_text_font';
  

  constructor(private adalSvc: MsAdalAngular6Service,private headerService:HeaderService) { }

  ngOnInit(): void {
    this.dropdownArray=[];
    let dropdown=dropdown_array.default;

    for(let i=0;i<dropdown.menu.length;i++){
      let head_drop={
        id:i,
        name:dropdown.menu[i].name,
        dropdown_list:dropdown.menu[i].menu_item
      }

      this.dropdownArray.push(head_drop);
    }

    this.headerService.getntStatus.subscribe((data)=>{
    
      if(data==true){
        this.width='280px';
        
      }
      else{
        this.width='0px';
        
      }
    })
    
  }
  logout() {
    this.adalSvc.logout();
  }
  closeSlideMenu(){
    this.width='0px';
    // this.headerService.hNotDisplay();
  }
  downMenuAs(){
      this.heightA='180px';
      this.displayA='block';
      this.displayd='none';
      this.displayu='block';
      this.fontAsu='bold 17px/30px Bw Modelica';
  }
  upMenuAs(){
   this.heightA='0px';
   this.displayA='none';
   this.displayd='block';
   this.displayu='none';
   this.fontAs='$section_content_text_font';
  }
  downMenuAc(){
    this.heightAc='150px';
    this.displayAc='block';
    this.displaydA='none';
    this.displayuA='block';
    this.fontAcu='bold 17px/30px Bw Modelica';
   
}
upMenuAc(){
 this.heightAc='0px';
 this.displayAc='none';
 this.displaydA='block';
 this.displayuA='none';
 this.fontAc='$section_content_text_font';
}

}
