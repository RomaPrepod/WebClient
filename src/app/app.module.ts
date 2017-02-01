import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureComponent } from './lectures/lecture.component';
import { WipComponent } from './wip/wip.component';

import { LectureService } from './lectures/lecture.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TopMenuComponent,
    HomeComponent,
    LecturesComponent,
    LectureComponent,
    WipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    LectureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
