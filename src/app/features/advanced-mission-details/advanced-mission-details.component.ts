import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';
import { NasaNhatsRequest } from 'src/app/nasa-nhats/nasa-nhats-request';

@Component({
  selector: 'nea-advanced-mission-details',
  templateUrl: './advanced-mission-details.component.html',
  styleUrls: ['./advanced-mission-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedMissionDetailsComponent implements OnInit, OnDestroy {

  destroyed = false;

  neo: NearEarthObject;
  filter: NasaNhatsRequest;

  constructor(private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.data
      .pipe(takeWhile(() => !this.destroyed))
      .subscribe((data: Data) => {
        this.neo = data.neo;
        this.filter = data.filter;
        this.changeDetector.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

}
