import { Component, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { NasaNhatsRequest } from 'src/app/nasa-nhats/nasa-nhats-request';
import { NasaNhatsService } from 'src/app/nasa-nhats/nasa-nhats.service';
import { NearEarthObject } from 'src/app/nasa-nhats/near-earth-object';

@Component({
  selector: 'nea-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListFilterComponent {
  @Output()
  selectionChange = new EventEmitter<NearEarthObject>();

  neos: NearEarthObject[];

  loading = false;

  constructor(private nasaNhatsService: NasaNhatsService,
              private changeDetector: ChangeDetectorRef) { }

  onFilterChange(filter: NasaNhatsRequest) {
    this.loading = true;
    this.selectionChange.emit(undefined);
    this.changeDetector.markForCheck();
    this.nasaNhatsService
      .getFilteredNearEarthObjects(filter)
      .subscribe(
        (result: NearEarthObject[]) => {
          this.neos = result;
          this.loading = false;
          this.changeDetector.markForCheck();
        }
      );
  }

  getNeoId(neo: NearEarthObject): string | number {
    return neo.des;
  }

  getNeoName(neo: NearEarthObject): string {
    return neo.fullname;
  }

  onSelectionChange(neo: NearEarthObject) {
    this.selectionChange.emit(neo);
  }
}
