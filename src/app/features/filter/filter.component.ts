import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'nea-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {
  form: FormGroup;

  deltaVs = [4, 5, 6, 7, 8, 9, 10, 11, 12];
  private destroyed = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      deltaV: 12,
      tripDays: 360,
      launchWindow: '2015-2040',
      stayDays: 8,
      magnitude: 26,
      orbitConditionCode: 7
    });
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        takeWhile(() => !this.destroyed)
      ).subscribe(
        (formValue) => this.onFormValueChange(formValue)
      );
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  private onFormValueChange(formValue: any): void {
    throw new Error('Method not implemented.');
  }

}
