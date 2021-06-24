import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-experience-intro',
  templateUrl: './experience-intro.component.html',
  styleUrls: ['./experience-intro.component.scss']
})
export class ExperienceIntroComponent implements OnInit {
  imageObject= [
    {
      id:"1",
      image: '../../../../assets/experience_design/exp-design1.png',
      desktop: 'A solution-based approach for fast-tracking web and mobile aplication development,transforming apps by leveraging digital tenets',
      mobile: ' A solution-based approach for fast-tracking web and mobile application development.'
    },
    {
      id:"2",
      image: '../../../../assets/experience_design/exp-design2.png',
      desktop: 'A solution-based approach for fast-tracking web and mobile aplication development,transforming apps by leveraging digital tenets',
      mobile: ' A solution-based approach for fast-tracking web and mobile application development.'
    },
    {
      id:"3",
      image: '../../../../assets/experience_design/exp-design1.png',
      desktop: 'A solution-based approach for fast-tracking web and mobile aplication development,transforming apps by leveraging digital tenets',
      mobile: ' A solution-based approach for fast-tracking web and mobile application development.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
