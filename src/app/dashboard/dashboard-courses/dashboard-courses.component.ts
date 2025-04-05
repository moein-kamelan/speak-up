import { Component } from '@angular/core';
import { CourseCardComponent } from '../../course-card/course-card.component';
import { DashboardAddCourseCardComponent } from './dashboard-add-course-card/dashboard-add-course-card.component';
import { CommonModule } from '@angular/common';
import { Course } from '../../courses';

@Component({
  selector: 'app-dashboard-courses',
  imports: [CourseCardComponent , DashboardAddCourseCardComponent , CommonModule],
  templateUrl: './dashboard-courses.component.html',
  styleUrl: './dashboard-courses.component.css'
})
export class DashboardCoursesComponent {
courses:Course[] = [
  {img : "/images/courses-images/course-img1.png" , 
  title : "Big English 4" , 
  level : "A2" , 
  term : "A1 a" ,
  startTime : "1402/09/21",
  members : "10/10" , 
  status : "در حال برگزاری" , 
  date : "24 آذر ماه",
  hour : "ساعت 12:00"

},
  {img : "/images/courses-images/course-img2.png" , 
  title : "Big English 2" , 
  level : "A1" , 
  term : "A2 b" ,
  startTime : "1402/11/03",
  members : "9/10" , 
  status : "در انتظار برگزاری" , 
  date : "24 بهمن ماه",
  hour : "ساعت 11:32 "

},
  {img : "/images/courses-images/course-img3.png" , 
  title : "Big English 5" , 
  level : "A2" , 
  term : "A1 a" ,
  startTime : "1401/03/20",
  members : "7/10" , 
  status : "در انتظار تکمیل ظرفیت" , 
  date : "25 شهریور ماه",
  hour : "08:34 ساعت "

},
  {img : "/images/courses-images/course-img1.png" , 
  title : "Big English 3" , 
  level : "A2" , 
  term : "A1 ذ" ,
  startTime : "1400/11/03",
  members : "4/10" , 
  status : "پایان یافته" , 
  date : "02 آبان ماه",
  hour : "02:00 ساعت "

},
]
}
