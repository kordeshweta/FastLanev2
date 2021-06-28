import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as contents from '../../constants/contents.json';

@Component({
  selector: 'app-assessment-slant-section',
  templateUrl: './assessment-slant-section.component.html',
  styleUrls: ['./assessment-slant-section.component.scss']
})
export class AssessmentSlantSectionComponent implements OnInit,AfterViewInit {
  
  buttonList=[] 

  contentList=[]

  white_bg='white-bg';
  transparent_white_bg='transparent-white-bg';
  grey_bg='grey-bg';
  translate='translate';

  data;
  constructor() { }
  ngAfterViewInit(): void {
    document.getElementById('container-main').classList.add('gradient-blue');
    document.getElementById('image-container').classList.add('image-web');
  }

  ngOnInit(): void {
    // console.log(contents.default);
    this.contentList=contents.default.contentList;
    this.buttonList=contents.default.buttonList;
    this.data=this.contentList[0];
    for(let i=0;i<this.buttonList.length;i++){
      if(i!=0)
        this.buttonList[i].selected=false;
      else
      this.buttonList[i].selected=true;
    }
  }

  add_remove_bg_gradients(remove1,remove2,add){
    var bg_list=['gradient-blue','gradient-orange','solid-peach'];
    document.getElementById('container-main').classList.remove(bg_list[remove1]);
    document.getElementById('container-main').classList.remove(bg_list[remove2]);
    document.getElementById('container-main').classList.add(bg_list[add]);
  }

  add_remove_image(remove1,remove2,add){
    var img_list=['image-web','image-mobile','image-headset'];
    document.getElementById('image-container').classList.remove(img_list[remove1]);
    document.getElementById('image-container').classList.remove(img_list[remove2]);
    document.getElementById('image-container').classList.add(img_list[add]);
  }
  categorySelected(btn){
    
    var id=btn.id

    if(id==0){
      this.add_remove_bg_gradients(1,2,0);
      this.add_remove_image(1,2,0);
    }
    else if(id==1){
      this.add_remove_bg_gradients(0,2,1);
      this.add_remove_image(0,2,1);
    }
    else if(id==2){
      this.add_remove_bg_gradients(0,1,2);
      this.add_remove_image(0,1,2);
    }

    this.data=this.contentList[id];
    this.buttonList.forEach(ele=>{

      if(ele.id===btn.id){
        ele.selected=true;
      }
      else
        ele.selected=false;
    })
    console.log(this.data);
  }
}
