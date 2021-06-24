import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutAssessmentComponent } from './about-assessment.component';
import { AssessmentSlantSectionComponent } from './components/assessment-slant-section/assessment-slant-section.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes:Routes=[
  {
    path:'',
    component:AboutAssessmentComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
]

@NgModule({
  declarations: [AboutAssessmentComponent,AssessmentSlantSectionComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ],
})
export class AboutAssessmentModule { }
