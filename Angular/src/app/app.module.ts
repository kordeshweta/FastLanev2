import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

import {HeaderService} from '../app/_services/header';
import {ComponentServicesService} from '../app/repository/component-services.service';
import {DataServiceService} from '../app/repository/data-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsAdalAngular6Module, MsAdalAngular6Service, AuthenticationGuard } from 'microsoft-adal-angular6';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './@Core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';
import {FormComponent} from '../app/repository/form/form.component';
import { AddFormComponent } from '../app/repository/Admin/add-form/add-form.component';
//repository
// import { RepohomeComponent } from '../app/repository/repohome/repohome.component';
// import { DetailsComponent,DownloadDialog } from '../app/repository/details/details.component';
// import { ImagedialogComponent } from '../app/repository/imagedialog/imagedialog.component';

import {MaterialModule} from './material.module';
import {SharedModule} from '../app/shared/shared.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


export function getAdalConfig() {
  return {
    tenant: environment.tanent,
    clientId: environment.clientId,
    redirectUri: environment.redirectUri,
    endpoints: {
      "api": environment.clientId
    },
    navigateToLoginRequestUrl: false,
    cacheLocation: 'sessionStorage'
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    AddFormComponent
    // RepohomeComponent,
    // DetailsComponent,
    // DownloadDialog,
    // ImagedialogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MsAdalAngular6Module,
    HttpClientModule, 
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    SharedModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MsAdalAngular6Module.forRoot(getAdalConfig),
  ],
  providers: [
    MsAdalAngular6Service,
    AuthenticationGuard,
    HeaderService,
    ComponentServicesService,
    DataServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
