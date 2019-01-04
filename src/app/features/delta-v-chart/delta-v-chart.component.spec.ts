import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltaVChartComponent } from './delta-v-chart.component';

describe('DeltaVChartComponent', () => {
  let component: DeltaVChartComponent;
  let fixture: ComponentFixture<DeltaVChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltaVChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaVChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
