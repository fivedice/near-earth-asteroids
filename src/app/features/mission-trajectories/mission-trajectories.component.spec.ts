import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTrajectoriesComponent } from './mission-trajectories.component';

describe('MissionTrajectoriesComponent', () => {
  let component: MissionTrajectoriesComponent;
  let fixture: ComponentFixture<MissionTrajectoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionTrajectoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionTrajectoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
