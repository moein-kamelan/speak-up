import { Component } from '@angular/core';
import { CourseCardComponent } from '../../course-card/course-card.component';
import { DashboardAddCourseCardComponent } from './dashboard-add-course-card/dashboard-add-course-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-courses',
  imports: [CourseCardComponent , DashboardAddCourseCardComponent , CommonModule],
  templateUrl: './dashboard-courses.component.html',
  styleUrl: './dashboard-courses.component.css'
})
export class DashboardCoursesComponent {
courses:any[] = [
  {img : "/images/courses-images/course-img1.png" , 
  title : "Big English 4" , 
  level : "A2" , 
  term : "A1 a" ,
  startTime : "1402/09/21",
  members : "10/10" , 
  status : "در حال برگزاری" , 


},
  {img : "/images/courses-images/course-img2.png" , 
  title : "Big English 2" , 
  level : "A1" , 
  term : "A2 b" ,
  startTime : "1402/11/03",
  members : "9/10" , 
  status : "در انتظار برگزاری" , 


},
  {img : "/images/courses-images/course-img3.png" , 
  title : "Big English 5" , 
  level : "A2" , 
  term : "A1 a" ,
  startTime : "1401/03/20",
  members : "7/10" , 
  status : "در انتظار تکمیل ظرفیت" , 


},
  {img : "/images/courses-images/course-img1.png" , 
  title : "Big English 3" , 
  level : "A2" , 
  term : "A1 ذ" ,
  startTime : "1400/11/03",
  members : "4/10" , 
  status : "پایان یافته" , 


},
]
}
