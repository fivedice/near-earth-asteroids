import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { NasaNhatsRequest } from 'src/app/nasa-nhats/nasa-nhats-request';

@Component({
  selector: 'nea-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output()
  filterValueChange = new EventEmitter<NasaNhatsRequest>();

  form: FormGroup;

  readonly deltaVOptions = [4, 5, 6, 7, 8, 9, 10, 11, 12];
  readonly tripDayOptions = [60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450];
  readonly stayDaysOptions = [8, 16, 24, 32];
  readonly launchWindowOptions = ['2015-2020', '2020-2025', '2025-2030', '2030-2035', '2035-2040', '2015-2040'];
  readonly magnitudeOptions = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  readonly orbitConditionCodeOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  private destroyed = false;
  private readonly request: NasaNhatsRequest = {
    deltaV: 12,
    tripDays: 360,
    launchWindow: '2015-2040',
    stayDays: 8,
    magnitude: 26,
    orbitConditionCode: 7
  };

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group(this.request);
  }

  ngOnInit() {
    this.filterValueChange.emit(this.request);
    this.form.valueChanges
      .pipe(takeWhile(() => !this.destroyed))
      .subscribe(formValue => this.filterValueChange.emit(formValue));
  }

  ngOnDestroy() {
    this.destroyed = true;
  }
}
