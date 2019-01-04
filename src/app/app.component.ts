import { Component } from '@angular/core';
import { NearEarthObject } from './nasa-nhats/near-earth-object';

@Component({
  selector: 'nea-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  neo: NearEarthObject;
}
