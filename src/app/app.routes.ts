import { Routes } from '@angular/router';

import {
  HomeComponent,
  LecturesComponent,
  LabsComponent,
  TestsComponent,
  ResultsComponent
} from './components';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'lectures', component: LecturesComponent },
  { path: 'labs', component: LabsComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'results', component: ResultsComponent }
];
