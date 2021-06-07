import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private adalSvc: MsAdalAngular6Service,) { }

  ngOnInit(): void {
  }
  logout() {
    this.adalSvc.logout();
  }

}
