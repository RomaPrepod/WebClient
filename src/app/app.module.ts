import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

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
    AppComponents.ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    AppServices.LectureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
