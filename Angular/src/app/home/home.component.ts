import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
    thumbImage: 'https://i.picsum.photos/id/580/400/350.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    thumbImage: 'https://i.picsum.photos/id/838/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    thumbImage: 'https://i.picsum.photos/id/93/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
    thumbImage: 'https://i.picsum.photos/id/543/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];

  startIndex;
  interval;
  constructor(){
    this.startIndex = 0
  }

  ngOnInit() {
    this.Repeat();
  }

  Repeat() {
    // setTimeout(() => {
    //   this.__FunctionSlide();
    //   this.Repeat();
    // }, 2000);
    this.interval = setInterval(() => {
      this.startIndex++
      this.__FunctionSlide()
    }, 3000)
    
  }

  __FunctionSlide() {
    console.log(this.startIndex)
    const slides = Array.from(document.getElementsByClassName('imgs'));
    const dots = Array.from(document.getElementsByClassName('dots'));

    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    
    for (let i = 0; i < dots[0].childNodes.length; i++) {
      const dot = dots[0].childNodes[i] as HTMLElement
      dot.className = dot.className.replace(" active", "");
    }
    
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
    } else if(this.startIndex < 0){
      this.startIndex = slides.length - 1
    }
    
    const slide = slides[this.startIndex] as HTMLElement;
    slide.style.display = 'block';
  
    const dot = dots[0].childNodes[this.startIndex] as HTMLElement
    dot.className += " active";
  }

  resetInterval(){
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.startIndex++
      this.__FunctionSlide()
    }, 3000)
  }
  left(){
    this.startIndex--;
    this.__FunctionSlide()
    this.resetInterval()
  }

  right(){
    this.startIndex++;
    this.__FunctionSlide()
    this.resetInterval()
  }

  currentSlide(id){
    this.startIndex = id-1;
    this.__FunctionSlide()
    this.resetInterval()
}

}
