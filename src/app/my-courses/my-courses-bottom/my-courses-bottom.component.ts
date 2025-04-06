import { Component, OnInit } from '@angular/core';
import { MyCoursesCardComponent } from './my-courses-card/my-courses-card.component';
import { AddCourseBtnComponent } from './add-course-btn/add-course-btn.component';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/courses';

@Component({
  selector: 'app-my-courses-bottom',
  imports: [MyCoursesCardComponent , AddCourseBtnComponent],
  templateUrl: './my-courses-bottom.component.html',
  styleUrl: './my-courses-bottom.component.css'
})
export class MyCoursesBottomComponent implements OnInit {
  courses:Course[] | null = null
  
constructor(private coursesService : CoursesService) {

}

ngOnInit(): void {
  this.courses = this.coursesService.getAllCourses()
  console.log(this.courses);
  
}
}
