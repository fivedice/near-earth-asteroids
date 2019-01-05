import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NearEarthObjectDetails } from 'src/app/nasa-nhats/near-earth-object-details';

@Component({
  selector: 'nea-mission-trajectories',
  templateUrl: './mission-trajectories.component.html',
  styleUrls: ['./mission-trajectories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionTrajectoriesComponent {

  @Input()
  neoDetails: NearEarthObjectDetails;

}
