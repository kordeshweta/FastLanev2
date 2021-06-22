import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { HeaderService } from 'src/app/_services/header';

@Component({
  selector: 'app-accelerators',
  templateUrl: './accelerators.component.html',
  styleUrls: ['./accelerators.component.scss']
})
export class AcceleratorsComponent implements OnInit {

  imageObject: Array<object> = [
    {
    image: '../../assets/home/Group 116407.svg',
    alt: 'Repository',
    link:'/repository',
    content : 'FastLane is a solution-based approach and methodology for fast-tracking web and mobile',
    dot: '../../assets/home/Group 116335.svg'
  }, 
  {
    image: '../../assets/home/Group 116406.svg',
    alt: 'UX Habitat',
    link:'/uxhabitat',
    content : 'FastLane is a solution-based approach and methodology for fast-tracking web and mobile',
    dot: '../../assets/home/Group 116329.svg'
  }, {
    image: '../../assets/home/Group 116405.svg',
    alt: 'Estimation',
    link:'/estimation',
    content : 'FastLane is a solution-based approach and methodology for fast-tracking web and mobile',
    dot: '../../assets/home/Group 116330.svg'
  }];

  startIndex;
  disableLeft;
  disableRight;
  constructor(private router:Router){
    this.startIndex = 1;
  }

  ngOnInit(){
    this.disableLeft = true;
    this.initOnWindowResize();
  }

  initOnWindowResize(){

    fromEvent(window, 'resize')
      .pipe(
        debounceTime(500)
      )
      .subscribe((event: any) => {
        // Do something here
        if(window.innerWidth >= 780){
          const slides = Array.from(document.getElementsByClassName('content'));
          for (const x of slides) {
            const y = x as HTMLElement;
            y.style.display = 'block';
          }
        }
      });
  }

  redirect(url){
    this.router.navigate([url]);
  }
  slide(){
    const slides = Array.from(document.getElementsByClassName('content'));
    
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }

    if(this.startIndex > 1 && this.startIndex < 4){
      this.disableLeft = false;
    }else{
      this.disableLeft = true;
    }

    if(this.startIndex == 3){
      this.disableRight = true;
    }else{
      this.disableRight = false;
    }
    // if (this.startIndex > slides.length - 1) {
    //   //this.startIndex = 0;
    //   this.disableRight = true;
    // } else if(this.startIndex == 1){
    //   //this.startIndex = slides.length - 1
    //   this.disableLeft = true;

    // }

    const slide = slides[this.startIndex-1] as HTMLElement;
    slide.style.display = 'block';
  }

  left(){
    this.startIndex--;
    this.slide();
  }

  right(){
    this.startIndex++;
    this.slide();
  }

}
