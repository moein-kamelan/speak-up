import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopCalendarComponent } from './dashboard-top-calendar.component';

describe('DashboardTopCalendarComponent', () => {
  let component: DashboardTopCalendarComponent;
  let fixture: ComponentFixture<DashboardTopCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTopCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTopCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
