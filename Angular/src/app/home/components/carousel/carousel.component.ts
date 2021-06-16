import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  imageObject: Array<object> = [
    {
    image: '../../assets/home/Group 116407.svg',
    alt: 'Repository',
    content : 'FastLane is a solution-based approach and methodology for fast-tracking web and mobile',
    dot: '../../assets/home/Group 116335.svg'
  }, 
  {
    image: '../../assets/home/Group 116406.svg',
    alt: 'UX Habitat',
    content : 'FastLane is a solution-based approach and methodology for fast-tracking web and mobile',
    dot: '../../assets/home/Group 116329.svg'
  }, {
    image: '../../assets/home/Group 116405.svg',
    alt: 'Estimation',
    content : 'FastLane is a solution-based approach and methodology for fast-tracking web and mobile',
    dot: '../../assets/home/Group 116330.svg'
  }];

  startIndex;
  disableLeft;
  disableRight;
  constructor(){
    this.startIndex = 1;
  }

  ngOnInit(){
    this.disableLeft = true;
  }

  slide(){
    const slides = Array.from(document.getElementsByClassName('content'));
    console.log(slides.length)
    console.log(this.startIndex)
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }

    if(this.startIndex > 1 && this.startIndex <= slides.length){
      this.disableLeft = false;
    }else{
      this.disableLeft = true;
    }

    if(this.startIndex == slides.length){
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
