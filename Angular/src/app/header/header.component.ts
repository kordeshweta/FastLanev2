import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HeaderService } from '../_services/header';
import * as dropdown_array from './constants/dropdown.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit{

  dropdownArray;
  constructor(private adalSvc: MsAdalAngular6Service,private headerService:HeaderService,private router:Router) { }

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
    document.querySelector('#home').classList.add('underline-home');
    
    
    window.addEventListener('resize', function(event) {
      var element1=document.getElementsByClassName('container-1'),
      element2=document.getElementsByClassName('container-1')[0].nextElementSibling.getBoundingClientRect()
      
      console.log();
    }, true);
  }

  removeUnderline(clsName){
    var optionsList=document.getElementsByClassName(clsName);

    for(let i=0;i<optionsList.length;i++){
      optionsList[i].classList.remove('underline');
      optionsList[i].classList.remove('underline-home')
    }
  }
  navigateToSection(url){
    if(url){
      this.removeUnderline('options');

      document.querySelector('#home').classList.add('underline-home');
      this.router.navigate(([url]));
    }
  }
  logout() {
    this.adalSvc.logout();
  }
  underlineOption(ev){
    var targetEleClassList=ev.srcElement.parentNode.parentNode.classList;
    
    if(targetEleClassList.contains('options')){
      this.removeUnderline('options');
      targetEleClassList.add('underline');
    } 
    
  }
  
  nDisplay(){
      this.headerService.hDisplay();
  }
}
