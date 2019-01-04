import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nea-mission-trajectories',
  templateUrl: './mission-trajectories.component.html',
  styleUrls: ['./mission-trajectories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionTrajectoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
