import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverageMetricsLieComponent } from './features/coverage-metrics-lie/coverage-metrics-lie.component';

const routes: Routes = [{
  path: 'coverage',
  component: CoverageMetricsLieComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
