import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { HeaderService } from './_services/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fastlane';

  constructor(updates: SwUpdate,private headerService:HeaderService,private router: Router)
  {
    updates.available.subscribe(event =>
    {
       updates.activateUpdate().then(() => document.location.reload());
    })
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'].includes('/home')) {
          // console.log("at home");
          this.headerService.setTab("Home");
        }
        else if(event['url'].includes('/repository')){
          // console.log("inside repository");
          this.headerService.setTab("Accelerators");
        }
      }
    });
  } 
}
