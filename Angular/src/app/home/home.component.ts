import { Component, OnInit,OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  index;

  ngOnInit(){
     window.addEventListener('scroll', this.scroll, true);
  }
  
  scroll(){
    const parallax_designs = Array.from(document.getElementsByClassName('parallax_design')); 
    for (let i = 0; i < parallax_designs.length; i++) {
      parallax_designs[i].className = parallax_designs[i].className.replace(" active", "");
    }
  
    const y = window.scrollY;
    const z = window.innerHeight;
    const q = (y/z) - Math.floor(y/z);
   // console.log(q)
    if(q >= 0.7){
      this.index = Math.ceil(y/z);
    }else{
      this.index = Math.floor(y/z);
    }
    //console.log(this.index)
    if(this.index < 7){
    parallax_designs[this.index].className += " active";
    }
    if(this.index==7){
      parallax_designs[6].className += " active";
    }
  }
  
  ngOnDestroy(){
    window.removeEventListener('scroll', this.scroll, true);
 }
}
