import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slant-section',
  templateUrl: './slant-section.component.html',
  styleUrls: ['./slant-section.component.scss']
})
export class SlantSectionComponent implements OnInit,AfterViewInit {
  @Input() background_color:string;
  constructor() { }
  ngAfterViewInit(): void {
    document.getElementById('container-main-id').style.backgroundColor=this.background_color;
  }

  ngOnInit(): void {
  }

}
