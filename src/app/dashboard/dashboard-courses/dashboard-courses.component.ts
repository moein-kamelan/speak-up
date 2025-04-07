import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../../course-card/course-card.component';
import { DashboardAddCourseCardComponent } from './dashboard-add-course-card/dashboard-add-course-card.component';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/courses';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-courses',
  imports: [CourseCardComponent , DashboardAddCourseCardComponent , CommonModule],
  templateUrl: './dashboard-courses.component.html',
  styleUrl: './dashboard-courses.component.css'
})
export class DashboardCoursesComponent implements OnInit {
  courses!:Observable<Course[]>  
constructor(private coursesService:CoursesService) {

}
ngOnInit(): void {
    
   this.courses = this.coursesService.getAllCourses()
}

}


