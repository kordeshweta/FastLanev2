import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-assessment-introduction',
  templateUrl: './assessment-introduction.component.html',
  styleUrls: ['./assessment-introduction.component.scss']
})
export class AssessmentIntroductionComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: [" ", " "],
    // navText: ["", ""],
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  // constructor() { }

  ngOnInit(): void {
  }


}
