import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from 'microsoft-adal-angular6';

import {RepohomeComponent} from '../app/repository/repohome/repohome.component';
import { AddFormComponent } from './repository/Admin/add-form/add-form.component';
import { DetailsComponent } from './repository/details/details.component';
import { QuickTourComponent } from './home/components/quick-tour/quick-tour.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule
      ),
    canActivate: [AuthenticationGuard],
  },
  // {
  //   path:'repository',
  //   component:RepohomeComponent
  // },
  {
    path:'details',
    component:DetailsComponent
  },

  {
    path: 'repository',
    loadChildren: () =>
      import('../app/repository/repository.module').then(
        (m) => m.RepositoryModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'about-assessment',
    loadChildren: () =>
      import('../app/about-assessment/about-assessment.module').then(
        (m) => m.AboutAssessmentModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'quickTour',
    component:QuickTourComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'Admin',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { roles: [Role.Admin] },
  // },

  {
    path: '**',
    redirectTo: '',
  },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
