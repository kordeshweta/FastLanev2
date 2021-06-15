import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import * as dropdown_array from './constants/dropdown.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit{

  dropdownArray;
  constructor(private adalSvc: MsAdalAngular6Service,) { }

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
  }

  ngAfterViewInit() {
    // document.querySelector('#home').classList.add('underline');
    
    
    window.addEventListener('resize', function(event) {
      var element1=document.getElementsByClassName('container-1'),
      element2=document.getElementsByClassName('container-1')[0].nextElementSibling.getBoundingClientRect()
      
      console.log();
    }, true);
  }
  
  logout() {
    this.adalSvc.logout();
  }
  underlineOption(){
    document.querySelector('#home').classList.add('underline');
  }
}
