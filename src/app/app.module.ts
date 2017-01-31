import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { AuthHttp } from 'angular2-jwt';
import { authHttpFactory } from './auth/authHttpFactory';

import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import * as AppComponents from './components';
import * as AppServices from './services';

@NgModule({
  declarations: [
    AppComponent,
    AppComponents.NavMenuComponent,
    AppComponents.TopMenuComponent,
    AppComponents.HomeComponent,
    AppComponents.LectureComponent,
    AppComponents.LecturesComponent,
    AppComponents.LabsComponent,
    AppComponents.TestsComponent,
    AppComponents.ResultsComponent,
    AppComponents.WipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    { provide: AuthHttp, useFactory: authHttpFactory, deps: [Http, RequestOptions] },
    AppSettings,
    AuthService,
    AppServices.LectureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
