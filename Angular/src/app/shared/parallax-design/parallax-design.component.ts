import { AfterViewInit, Component, Input, OnInit ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-parallax-design',
  templateUrl: './parallax-design.component.html',
  styleUrls: ['./parallax-design.component.scss']
})
export class ParallaxDesignComponent implements OnInit {

  index;
  @Input() count ;
  @Input() id;

  constructor(private elementRef:ElementRef) {}
  ngOnInit(){
    window.addEventListener('scroll', this.scroll.bind(this), true);
  }
  
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  scroll(){
    const parallax_designs = Array.from(document.getElementsByClassName('parallax_design')); 
    for (let i = 0; i < parallax_designs.length; i++) {
      parallax_designs[i].className = parallax_designs[i].className.replace(" active", "");
    }
  
    const y = window.scrollY;
    const z = window.innerHeight;
    const q = (y/z) - Math.floor(y/z);

    if(q >= 0.25){
      this.index = Math.ceil(y/z);
    }else{
      this.index = Math.floor(y/z);
    }
   // console.log(y/z)
    if(this.index < this.count){
    parallax_designs[this.index].className += " active";
    }
    if(this.index==this.count){
      parallax_designs[this.count-1].className += " active";
    }
  }
  
  ngOnDestroy(){
    window.removeEventListener('scroll', this.scroll.bind(this), true);
 }

}
