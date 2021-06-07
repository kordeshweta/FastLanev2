import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsAdalAngular6Module, MsAdalAngular6Service, AuthenticationGuard } from 'microsoft-adal-angular6';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './@Core';


import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';

import {MaterialModule} from './material.module';


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
    FooterComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
