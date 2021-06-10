import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { Routes, RouterModule } from '@angular/router';
import { RepohomeComponent } from '../repository/repohome/repohome.component';
import { DetailsComponent,DownloadDialog } from '../repository/details/details.component';
import { ImagedialogComponent } from '../repository/imagedialog/imagedialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent, DownloadDetailsDialog,DialogOverviewExampleDialog } from './Admin/admin/admin.component';
import {AddFormComponent} from './Admin/add-form/add-form.component';
//import { RepoServService } from 'src/app/_services/repo-serv.service';
const routes: Routes = [
  {
    path: '',
    component:RepohomeComponent
  },
  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path:'AddForm',
    component:AddFormComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];


@NgModule({
    declarations: [RepohomeComponent,DetailsComponent,DownloadDialog,ImagedialogComponent,AdminComponent,DownloadDetailsDialog,DialogOverviewExampleDialog],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      SharedModule,
      Ng2SearchPipeModule,
      FlexLayoutModule,
      RouterModule.forChild(routes),
    ],
    providers: [
    //  RepoServService
    ],
    entryComponents:[DownloadDialog,DownloadDetailsDialog,]
  })
  export class RepositoryModule { }
  