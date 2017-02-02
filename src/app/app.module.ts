// Basics
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { FIRE_CONFIG } from '../environments/firebase.config';

// Components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureComponent } from './lectures/lecture.component';
import { WipComponent } from './wip/wip.component';

// Services
import { AuthService } from './auth/auth.service';
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
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(FIRE_CONFIG),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    AuthService,
    LectureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
