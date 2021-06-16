import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '../material.module';

//components
import { CarouselComponent } from './components/carousel/carousel.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
// import { SlantSectionComponent } from './components/slant-section/slant-section.component';
import { VideoComponent } from './components/video/video.component';

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
    VideoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),

  ],
  exports: [HomeComponent,RouterModule],
})
export class HomeModule { }