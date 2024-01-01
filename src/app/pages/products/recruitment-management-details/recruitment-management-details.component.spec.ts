import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentManagementDetailsComponent } from './recruitment-management-details.component';

describe('RecruitmentManagementDetailsComponent', () => {
  let component: RecruitmentManagementDetailsComponent;
  let fixture: ComponentFixture<RecruitmentManagementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecruitmentManagementDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecruitmentManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
