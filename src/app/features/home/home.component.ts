import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';
import { Router } from '@angular/router';
import { NasaNhatsRequest } from 'src/app/nasa-nhats/nasa-nhats-request';
import { NasaNhatsService } from 'src/app/nasa-nhats/nasa-nhats.service';

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
  currentFilter: NasaNhatsRequest;

  constructor(private router: Router,
              private nasaNhatsService: NasaNhatsService,
              private changeDetector: ChangeDetectorRef) {}

  onFilterChange(filter: NasaNhatsRequest) {
    this.loading = true;
    this.currentFilter = filter;
    this.changeDetector.markForCheck();
    this.nasaNhatsService
      .getFilteredNearEarthObjects(filter)
      .subscribe(
        (result: NearEarthObject[]) => {
          this.neos = result;
          this.loading = false;
          this.changeDetector.markForCheck();
        }
      );
  }

  getNeoId(neo: NearEarthObject): string | number {
    return neo.des;
  }

  getNeoName(neo: NearEarthObject): string {
    return neo.fullname;
  }
}
