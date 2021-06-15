import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router';


import { MaterialModule } from '../material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

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

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),

  ],
  exports: [HomeComponent,RouterModule],
})
export class HomeModule { }