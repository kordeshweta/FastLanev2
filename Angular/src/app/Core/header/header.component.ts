import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HeaderService } from '../../_services/header';
import * as dropdown_array from './constants/dropdown.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit,OnDestroy{

  dropdownArray;
  destroy$:Subject<boolean>=new Subject<boolean>();

  constructor(private adalSvc: MsAdalAngular6Service,private headerService:HeaderService,private router:Router) {
   }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

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
    
    this.headerService.changeTab.pipe(takeUntil(this.destroy$)).subscribe(res=>{
      var targetEleClassList=document.getElementsByClassName('options');
      var n=targetEleClassList.length;
      
      if(res=="Accelerators")
        this.underLine(targetEleClassList[n-1].classList,"nh");
      else if(res=="Assessments"){
        this.underLine(targetEleClassList[n-2].classList,"nh");
      }
      else if(res=="Home"){
         this.underLine("#home","h");
      }
    })
    
    window.addEventListener('resize', function(event) {
      var element1=document.getElementsByClassName('container-1'),
      element2=document.getElementsByClassName('container-1')[0].nextElementSibling.getBoundingClientRect()
      
    }, true);
  }

  removeUnderline(clsName){
    var optionsList=document.getElementsByClassName(clsName);

    for(let i=0;i<optionsList.length;i++){
      optionsList[i].classList.remove('underline');
      optionsList[i].classList.remove('underline-home');
    }
  }
  underLine(targetEleClassList,str){
    if(str==="h"){
      this.removeUnderline('options');
      document.querySelector(targetEleClassList).classList.add('underline-home');
    }
    else if( str==="nh" && targetEleClassList.contains('options') ){
      this.removeUnderline('options');
      targetEleClassList.add('underline');
    } 
  }
  navigateToSection(url){
    if(url){
      this.underLine("#home","h");
      this.router.navigate(([url]));
    }
  }
  underlineOption(ev){
    var targetEleClassList=ev.srcElement.parentNode.parentNode.classList;
    this.underLine(targetEleClassList,"nh");
  }

  logout() {
    this.adalSvc.logout();
  }
  
  nDisplay(){
      this.headerService.hDisplay();
  }
}
