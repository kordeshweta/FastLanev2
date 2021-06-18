import { Component, OnInit,OnDestroy, AfterViewInit } from '@angular/core';
import { HeaderService } from '../_services/header';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  index;
  ngOnInit(){
    window.addEventListener('scroll', this.scroll, true);
    this.scroll()
  }
  
  scroll(){
    const parallax_designs = Array.from(document.getElementsByClassName('parallax_design')); 
    for (let i = 0; i < parallax_designs.length; i++) {
      parallax_designs[i].className = parallax_designs[i].className.replace(" active", "");
    }
  
    const y = window.scrollY;
    const z = window.innerHeight;
    if((y/z) >= 0.5){
      this.index = Math.ceil(y/z);
    }else{
      this.index = Math.floor(y/z);
    }

    if(this.index < 7){
    parallax_designs[this.index].className += " active";
    }
  }

}
