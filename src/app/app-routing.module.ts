import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  LecturesComponent,
  LabsComponent,
  TestsComponent,
  ResultsComponent
} from './components';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'lectures', component: LecturesComponent },
  { path: 'labs', component: LabsComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
