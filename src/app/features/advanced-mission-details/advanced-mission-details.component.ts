import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';
import { NasaNhatsRequest } from 'src/app/nasa-nhats/nasa-nhats-request';
import { StateService } from 'src/app/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nea-advanced-mission-details',
  templateUrl: './advanced-mission-details.component.html',
  styleUrls: ['./advanced-mission-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedMissionDetailsComponent implements OnInit {

  neo: NearEarthObject;
  request: NasaNhatsRequest;

  constructor(private router: Router,
              private stateService: StateService,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.neo = this.stateService.state.get('neo');
    this.request = this.stateService.state.get('nasaNhatsRequest');
    // If we're refreshing the advanced page then we don't have the right state.
    // Load it up from localStorage.
    if (!this.neo || !this.request) {
      this.stateService.state = new Map(JSON.parse(localStorage.getItem('near-earth-asteroids')));
      this.neo = this.stateService.state.get('neo');
      this.request = this.stateService.state.get('nasaNhatsRequest');
    }

    if (!this.neo || !this.request) {
      this.router.navigate(['']);
    }
    this.changeDetector.markForCheck();
  }
}
