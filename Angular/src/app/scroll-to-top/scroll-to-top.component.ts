import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {
    windowScrolled: boolean;
    constructor(@Inject(DOCUMENT) private document: Document) {}
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (window.pageYOffset > 1100 || document.documentElement.scrollTop > 1100 || document.body.scrollTop > 1100 ) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset < 1100 || document.documentElement.scrollTop < 1100 || document.body.scrollTop < 1100) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() {}
}
