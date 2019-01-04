import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';
import { Router } from '@angular/router';
import { NasaNhatsRequest } from 'src/app/nasa-nhats/nasa-nhats-request';
import { NasaNhatsService } from 'src/app/nasa-nhats/nasa-nhats.service';
import { StateService } from 'src/app/state/state.service';

@Component({
  selector: 'nea-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  neo: NearEarthObject;
  neos: NearEarthObject[];
  loading = false;

  constructor(private router: Router,
              private nasaNhatsService: NasaNhatsService,
              private stateService: StateService,
              private changeDetector: ChangeDetectorRef) {}

  onFilterChange(request: NasaNhatsRequest) {
    this.loading = true;
    this.stateService.state.set('nasaNhatsRequest', request);
    this.changeDetector.markForCheck();
    this.nasaNhatsService
      .getFilteredNearEarthObjects(request)
      .subscribe(
        (result: NearEarthObject[]) => {
          this.neos = result;
          this.loading = false;
          this.changeDetector.markForCheck();
        }
      );
  }

  onSelectionChange(neo: NearEarthObject) {
    this.neo = neo;
    this.stateService.state.set('neo', neo);
    this.changeDetector.markForCheck();
  }

  onAdvancedButtonClick() {
    // I don't want to re-query NASA every time I want this data,
    // so I'm not passing id's in the router and querying.
    // I'm just gonna store the state in local storage and then I can retrieve it
    // if we're refreshing the advanced page.
    localStorage.setItem('near-earth-asteroids', JSON.stringify(Array.from(this.stateService.state.entries())));
    this.router.navigate(['advanced']);
  }

  getNeoId(neo: NearEarthObject): string | number {
    return neo.des;
  }

  getNeoName(neo: NearEarthObject): string {
    return neo.fullname;
  }
}
