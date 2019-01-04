import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverageMetricsLieComponent } from './features/coverage-metrics-lie/coverage-metrics-lie.component';
import { HomeComponent } from './features/home/home.component';
import { AdvancedMissionDetailsComponent } from './features/advanced-mission-details/advanced-mission-details.component';

const routes: Routes = [
  {
    path: 'coverage',
    component: CoverageMetricsLieComponent,
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'advanced',
    component: AdvancedMissionDetailsComponent
  }, {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
