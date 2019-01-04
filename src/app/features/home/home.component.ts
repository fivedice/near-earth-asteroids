import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';
import { Router } from '@angular/router';

@Component({
  selector: 'nea-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  neo: NearEarthObject;

  constructor(private router: Router) {}
}
