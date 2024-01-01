import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPortalAutoRecruitmentDetailsComponent } from './job-portal-auto-recruitment-details.component';

describe('JobPortalAutoRecruitmentDetailsComponent', () => {
  let component: JobPortalAutoRecruitmentDetailsComponent;
  let fixture: ComponentFixture<JobPortalAutoRecruitmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobPortalAutoRecruitmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobPortalAutoRecruitmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
