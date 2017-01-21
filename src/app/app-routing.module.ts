import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LabsComponent } from './labs/labs.component';
import { TestsComponent } from './tests/tests.component';
import { ResultsComponent } from './results/results.component';

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
