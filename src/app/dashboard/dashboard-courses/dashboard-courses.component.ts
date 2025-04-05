import { Component } from '@angular/core';
import { CourseCardComponent } from '../../course-card/course-card.component';
import { DashboardAddCourseCardComponent } from './dashboard-add-course-card/dashboard-add-course-card.component';

@Component({
  selector: 'app-dashboard-courses',
  imports: [CourseCardComponent , DashboardAddCourseCardComponent],
  templateUrl: './dashboard-courses.component.html',
  styleUrl: './dashboard-courses.component.css'
})
export class DashboardCoursesComponent {

}
