import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureComponent } from './lectures/lecture.component';
import { WipComponent } from './wip/wip.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'lectures', component: LecturesComponent },
  { path: 'labs', component: WipComponent },
  { path: 'tests', component: WipComponent },
  { path: 'results', component: WipComponent }
];
