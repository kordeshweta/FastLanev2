import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { HeaderService } from './_services/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fastlane';

  constructor(updates: SwUpdate,private headerService:HeaderService)
  {
    updates.available.subscribe(event =>
    {
       updates.activateUpdate().then(() => document.location.reload());
    })
  } 
}
