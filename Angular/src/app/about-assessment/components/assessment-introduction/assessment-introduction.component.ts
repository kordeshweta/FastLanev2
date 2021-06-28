import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-assessment-introduction',
  templateUrl: './assessment-introduction.component.html',
  styleUrls: ['./assessment-introduction.component.scss']
})
export class AssessmentIntroductionComponent implements OnInit {

  imageObject = [
    {
      id: "1",
      image: '../../../../assets/Assessment-Landing/Img1.png',
      desktop: 'Get expert opinions on',
      desktop_span: 'Your Reports',
      mobile: ' Get expert opinions on',
      mobile_span: ' Your Reports '
    },
    {
      id: "2",
      image: '../../../../assets/Assessment-Landing/Img2.png',
      desktop: 'Assess your applications using ',
      desktop_span: 'Our Assessments',
      mobile: ' Assess your applications using Our Assessments'
    },
    {
      id: "3",
      image: '../../../../assets/Assessment-Landing/Img3.png',
      desktop: 'Get expert opinions on',
      desktop_span: ' Your Reports',
      mobile: 'Get expert opinions on Your Reports'
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
    dots: true,
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
    nav: false
  }
}
