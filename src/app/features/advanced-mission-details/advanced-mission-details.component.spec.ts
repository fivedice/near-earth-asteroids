import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedMissionDetailsComponent } from './advanced-mission-details.component';

describe('AdvancedMissionDetailsComponent', () => {
  let component: AdvancedMissionDetailsComponent;
  let fixture: ComponentFixture<AdvancedMissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedMissionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedMissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
