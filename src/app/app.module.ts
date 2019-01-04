import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverageMetricsLieComponent } from './features/coverage-metrics-lie/coverage-metrics-lie.component';
import { ListFilterComponent } from './features/list-filter/list-filter.component';
import { FilterComponent } from './features/filter/filter.component';
import { ListComponent } from './features/list/list.component';
import { SelectableDirective } from './features/common/selectable.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './features/common/loader/loader.component';
import { DetailsComponent } from './features/details/details.component';
import { ObjectDetailsComponent } from './features/object-details/object-details.component';
import { ObservationDetailsComponent } from './features/observation-details/observation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverageMetricsLieComponent,
    ListFilterComponent,
    FilterComponent,
    ListComponent,
    SelectableDirective,
    LoaderComponent,
    DetailsComponent,
    ObjectDetailsComponent,
    ObservationDetailsComponent
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
