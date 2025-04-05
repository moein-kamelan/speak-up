import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddCourseCardComponent } from './dashboard-add-course-card.component';

describe('DashboardAddCourseCardComponent', () => {
  let component: DashboardAddCourseCardComponent;
  let fixture: ComponentFixture<DashboardAddCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAddCourseCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
