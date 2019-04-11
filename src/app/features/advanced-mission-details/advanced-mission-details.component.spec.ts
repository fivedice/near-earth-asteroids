import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvancedMissionDetailsComponent } from './advanced-mission-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdvancedMissionDetailsComponent', () => {
  let component: AdvancedMissionDetailsComponent;
  let fixture: ComponentFixture<AdvancedMissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ AdvancedMissionDetailsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
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
