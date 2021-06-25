import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

//components
import { IntroductionComponent } from './components/introduction/introduction.component';
// import { SlantSectionComponent } from './components/slant-section/slant-section.component';
import { DiscoverSectionComponent } from './components/discover-section/discover-section.component';
import { TestComponent } from './components/test/test.component';
// import { ClientFeedbackComponent } from './components/client-feedback/client-feedback.component';
import { QuickTourComponent } from './components/quick-tour/quick-tour.component';
import { AcceleratorsComponent } from './components/accelerators/accelerators.component';
//import {ClientFeedbackComponent} from './components/client-feedback/client-feedback.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    IntroductionComponent,
    // SlantSectionComponent,
    DiscoverSectionComponent,
    TestComponent,
    // ClientFeedbackComponent,
    QuickTourComponent,
    AcceleratorsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),

  ],
  exports: [HomeComponent, RouterModule],
})
export class HomeModule { }