import { Component, OnInit } from '@angular/core';
import * as contents from '../../constants/contents.json';

@Component({
  selector: 'app-assessment-slant-section',
  templateUrl: './assessment-slant-section.component.html',
  styleUrls: ['./assessment-slant-section.component.scss']
})
export class AssessmentSlantSectionComponent implements OnInit {
  
  buttonList=[] 

  contentList=[]

  white_bg='white-bg';
  transparent_white_bg='transparent-white-bg';
  constructor() { }

  ngOnInit(): void {
    // console.log(contents.default);
    this.contentList=contents.default.contentList;
    this.buttonList=contents.default.buttonList;
  }

  categorySelected(cl_item){
    // console.log(cl_item);
    this.contentList.forEach(ele=>{

      if(ele.id===cl_item.id)
        ele.visible=true;
      else
        ele.visible=false;
 
    })

    this.buttonList.forEach(ele=>{

      if(ele.id===cl_item.id){
        ele.selected=true;
      }
      else
        ele.selected=false;
    })
  }
}
