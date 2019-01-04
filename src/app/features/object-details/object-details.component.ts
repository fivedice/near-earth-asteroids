import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';

@Component({
  selector: 'nea-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectDetailsComponent {
  @Input()
  neo: NearEarthObject;
}
