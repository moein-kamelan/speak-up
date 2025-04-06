import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { DashboardTopComponent } from './dashboard-top/dashboard-top.component';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { MaterialModule } from '../material/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-dashboard',
  imports: [ DashboardTopComponent , DashboardCoursesComponent , MaterialModule  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
  
})
export class DashboardComponent {

}
