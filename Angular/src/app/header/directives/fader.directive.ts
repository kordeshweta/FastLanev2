import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appFader]'
})
export class FaderDirective {

    constructor(public el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.FadeIn(this.el.nativeElement.lastChild);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.FadeOut(this.el.nativeElement.lastChild);
    }

    FadeOut(element){
        let op = 1;  // initial opacity
        const timer = setInterval(function() {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = "none";
            }
            element.style.opacity = op;
            element.style.filter = "alpha(opacity=" + op * 100 + ")";
            op -= op * 0.2;
        }, 20);
    }

    FadeIn(element){
        let op = 0.1;  // initial opacity
        element.style.display = 'block';
        const timer = setInterval(function() {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = "alpha(opacity=" + op * 100 + ")";
            op += op * 0.2;
        }, 20);
    }
}
