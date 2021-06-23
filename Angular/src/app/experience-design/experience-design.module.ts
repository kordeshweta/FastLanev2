import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { ExperienceDesignComponent } from './experience-design.component';
import { ExperienceIntroComponent } from './components/experience-intro/experience-intro.component';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';


const routes: Routes = [
  {
    path: '',
    component: ExperienceDesignComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    ExperienceDesignComponent,
    ExperienceIntroComponent,
    ExperienceFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),

  ],
  exports: [ExperienceDesignComponent,RouterModule],
})
export class ExperienceDesignModule { }