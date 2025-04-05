import { Component } from '@angular/core';
import { DashboardTopCourseComponent } from './dashboard-top-course/dashboard-top-course.component';
import { DashboardTopCalendarComponent } from './dashboard-top-calendar/dashboard-top-calendar.component';

@Component({
  selector: 'app-dashboard-top',
  imports: [DashboardTopCourseComponent , DashboardTopCalendarComponent],
  templateUrl: './dashboard-top.component.html',
  styleUrl: './dashboard-top.component.css'
})
export class DashboardTopComponent {

}
