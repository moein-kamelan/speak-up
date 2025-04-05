import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopCourseComponent } from './dashboard-top-course.component';

describe('DashboardTopCourseComponent', () => {
  let component: DashboardTopCourseComponent;
  let fixture: ComponentFixture<DashboardTopCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTopCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTopCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
