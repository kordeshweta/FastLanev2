import { Component, Input, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() head_obj: any;

  constructor(private adalSvc: MsAdalAngular6Service,) { }

  ngOnInit(): void {
    // console.log(this.head_obj)
  }
  logout() {
    this.adalSvc.logout();
  }

}
