import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionConstraintsComponent } from './mission-constraints.component';

describe('MissionConstraintsComponent', () => {
  let component: MissionConstraintsComponent;
  let fixture: ComponentFixture<MissionConstraintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionConstraintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
