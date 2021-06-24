import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutAssessmentComponent } from './about-assessment.component';

const routes:Routes=[
  {
    path:'',
    component:AboutAssessmentComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AboutAssessmentModule { }
