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
  head_obj:any;
  show_head:boolean;

  constructor(updates: SwUpdate,private headerService:HeaderService)
  {
    this.head_obj={
      prop:"val",
      prop2:"val2"
    }
    updates.available.subscribe(event =>
    {
       updates.activateUpdate().then(() => document.location.reload());
    })
    
    headerService.show_head.subscribe(res=>{
      this.show_head=res;
    })
  } 
}
