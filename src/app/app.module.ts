import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverageMetricsLieComponent } from './features/coverage-metrics-lie/coverage-metrics-lie.component';
import { FilterComponent } from './features/filter/filter.component';
import { ListComponent } from './features/list/list.component';
import { SelectableDirective } from './features/common/selectable.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './features/common/loader/loader.component';
import { DetailsComponent } from './features/details/details.component';
import { ObjectDetailsComponent } from './features/object-details/object-details.component';
import { ObservationDetailsComponent } from './features/observation-details/observation-details.component';
import { HomeComponent } from './features/home/home.component';
import { AdvancedMissionDetailsComponent } from './features/advanced-mission-details/advanced-mission-details.component';
import { MissionTrajectoriesComponent } from './features/mission-trajectories/mission-trajectories.component';
import { DeltaVChartComponent } from './features/delta-v-chart/delta-v-chart.component';
import { MissionConstraintsComponent } from './features/mission-constraints/mission-constraints.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverageMetricsLieComponent,
    FilterComponent,
    ListComponent,
    SelectableDirective,
    LoaderComponent,
    DetailsComponent,
    ObjectDetailsComponent,
    ObservationDetailsComponent,
    HomeComponent,
    AdvancedMissionDetailsComponent,
    MissionTrajectoriesComponent,
    DeltaVChartComponent,
    MissionConstraintsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
