import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { DashboardTopComponent } from './dashboard-top/dashboard-top.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';

@Component({
  selector: 'app-dashboard',
  imports: [CourseCardComponent , DashboardTopComponent , DashboardCoursesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
