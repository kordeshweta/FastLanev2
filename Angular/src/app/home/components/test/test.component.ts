import { AfterViewInit, Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {
    @Input() bgC: string;
    var: string;
    @Input()  hhh: string;
    @ViewChild('Ele') element;
    constructor(public el: ElementRef) { }
    ngAfterViewInit(): void {
        // document.getElementById('myEle').style.backgroundColor=this.bgC;
        // console.log(this.element);
        this.element.nativeElement.style.backgroundColor = this.bgC;
    }

    ngOnInit(): void {
    }

}
