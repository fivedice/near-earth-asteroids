import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NearEarthObjectDetails } from 'src/app/nasa-nhats/near-earth-object-details';

@Component({
  selector: 'nea-delta-v-chart',
  templateUrl: './delta-v-chart.component.html',
  styleUrls: ['./delta-v-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeltaVChartComponent {

  @Input()
  neoDetails: NearEarthObjectDetails;

  constructor(private sanitizer: DomSanitizer) { }

  getPlotImage(): SafeResourceUrl {
    if (!this.neoDetails) {
      return '';
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + this.neoDetails.plot_base64);
  }

}
