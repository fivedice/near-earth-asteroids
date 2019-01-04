import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';

@Component({
  selector: 'nea-observation-details',
  templateUrl: './observation-details.component.html',
  styleUrls: ['./observation-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservationDetailsComponent {

  @Input()
  neo: NearEarthObject;

}
