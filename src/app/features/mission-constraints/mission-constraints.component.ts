import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NasaNhatsRequest } from 'src/app/nasa-nhats/nasa-nhats-request';

@Component({
  selector: 'nea-mission-constraints',
  templateUrl: './mission-constraints.component.html',
  styleUrls: ['./mission-constraints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionConstraintsComponent {

  @Input()
  request: NasaNhatsRequest;

}
