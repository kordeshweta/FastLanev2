import { AfterViewInit, Component, Input, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-slant-section',
  templateUrl: './slant-section.component.html',
  styleUrls: ['./slant-section.component.scss']
})
export class SlantSectionComponent implements OnInit,AfterViewInit {
  @Input() background_color:string;
  @Input() image:string;
  @Input() heading:string;
  @Input() sub_heading:string;
  @Input() description:string;
  @Input() button:string;
  @Input() order:string;
  @Input() slant:string;
  @Input() elevation:string;

  @ViewChild('container_main') cont_main;
  @ViewChild('container_in_1') cont_in_1;
  @ViewChild('container_in_2') cont_in_2;
  @ViewChild('btn') button_style;

  right:boolean=false;
  left:boolean=true;
  constructor() { }

  ngAfterViewInit(): void {
    var cont_main=this.cont_main.nativeElement;
    var cont_in_1=this.cont_in_1.nativeElement;
    var cont_in_2=this.cont_in_2.nativeElement;
    var button_style=this.button_style.nativeElement;

    if(this.background_color=="white"){
      cont_main.style.backgroundColor=this.background_color;
      cont_main.style.color="black";
      button_style.classList.add("cmn","save");
    }
    else{
      cont_main.classList.add('gradient-color');
      cont_main.style.color="white";
      cont_main.style.backgroundImage="linear-gradient(#0670BA, #2A2E7D)";
      button_style.classList.add("cmn","exit");
    }
      

    cont_main.style.zIndex=Number(this.elevation);

    if(this.order=="image-text"){
      cont_in_1.classList.add('first-div');
      cont_in_2.classList.add('second-div');  
    }

    else if(this.order=="text-image"){
      cont_in_2.classList.add('first-div');
      cont_in_1.classList.add('second-div');   
      cont_main.classList.add('container-main-reverse');
    }

    if(this.slant.includes('rl')==true){
      cont_main.classList.add('slant-rl');
    }
    if(this.slant.includes('lr')==true){
      cont_main.classList.add('slant-lr');
    }
  }

  ngOnInit(): void {
    if(this.order=="image-text"){
      this.left=true;
      this.right=false;  
    }

    else if(this.order=="text-image"){
      this.left=false;
      this.right=true;
    }
  }

}
