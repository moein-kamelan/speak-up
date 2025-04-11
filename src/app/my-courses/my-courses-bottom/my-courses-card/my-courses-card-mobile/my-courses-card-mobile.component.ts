import { Component, Input } from '@angular/core';
import { Course } from '../../../../models/courses';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-my-courses-card-mobile',
  imports: [DatePipe],
  templateUrl: './my-courses-card-mobile.component.html',
  styleUrl: './my-courses-card-mobile.component.css'
})
export class MyCoursesCardMobileComponent {
@Input() course!:Course
}
