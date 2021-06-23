import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { ExperienceDesignComponent } from './experience-design.component';


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
    ExperienceDesignComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
})
export class ExperienceDesignModule { }