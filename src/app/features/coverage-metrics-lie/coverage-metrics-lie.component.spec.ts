import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageMetricsLieComponent } from './coverage-metrics-lie.component';

describe('CoverageMetricsLieComponent', () => {
  let component: CoverageMetricsLieComponent;
  let fixture: ComponentFixture<CoverageMetricsLieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageMetricsLieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageMetricsLieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
