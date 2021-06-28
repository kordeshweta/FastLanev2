import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {
  fullName:string="";
  orgName:string="";
  orgEmail:string="";
  oContact:string="";
  oCountry:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
