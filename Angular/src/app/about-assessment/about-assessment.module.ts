import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutAssessmentComponent } from './about-assessment.component';
import { AssessmentSlantSectionComponent } from './components/assessment-slant-section/assessment-slant-section.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AssessmentIntroductionComponent } from './components/assessment-introduction/assessment-introduction.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AssessmentReportComponent } from './components/assessment-report/assessment-report.component';
import { MaterialModule } from '../material.module';


const routes: Routes = [
  {
    path: '',
    component: AboutAssessmentComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
]

@NgModule({
  declarations: [AboutAssessmentComponent, AssessmentSlantSectionComponent, AssessmentIntroductionComponent, AssessmentReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),

    CarouselModule,

    MaterialModule,

  ]
})




export class AboutAssessmentModule { }
