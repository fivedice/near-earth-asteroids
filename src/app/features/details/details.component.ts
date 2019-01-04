import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';

@Component({
  selector: 'nea-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {

  @Input()
  neo: NearEarthObject;

  @Output()
  advancedButtonClick = new EventEmitter<any>();

}
