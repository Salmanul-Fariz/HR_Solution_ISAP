import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetAttendanceDetailsComponent } from './timesheet-attendance-details.component';

describe('TimesheetAttendanceDetailsComponent', () => {
  let component: TimesheetAttendanceDetailsComponent;
  let fixture: ComponentFixture<TimesheetAttendanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimesheetAttendanceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimesheetAttendanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
