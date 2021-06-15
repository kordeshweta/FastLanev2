import { Directive, ElementRef, HostListener, } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(public el:ElementRef) { }

  @HostListener('mouseenter') HoverIn(){
    this.el.nativeElement.style.backgroundColor="rgba(102, 102, 102,0.1)";
    this.el.nativeElement.style.borderLeft="4px solid orange";
  }
  @HostListener('mouseleave') HoverOut(){
    this.el.nativeElement.style.backgroundColor="white";
    this.el.nativeElement.style.borderLeft="4px solid transparent";
  }
}
