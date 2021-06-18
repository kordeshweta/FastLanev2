import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

//components
import { CarouselComponent } from './components/carousel/carousel.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
// import { SlantSectionComponent } from './components/slant-section/slant-section.component';
import { VideoComponent } from './components/video/video.component';
import { TestComponent } from './components/test/test.component';
import { ClientFeedbackComponent } from './components/client-feedback/client-feedback.component';
import { QuickTourComponent } from './components/quick-tour/quick-tour.component';

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
    CarouselComponent,
    IntroductionComponent,
    // SlantSectionComponent,
    VideoComponent,
    TestComponent,
    ClientFeedbackComponent,
    QuickTourComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),

  ],
  exports: [HomeComponent,RouterModule],
})
export class HomeModule { }