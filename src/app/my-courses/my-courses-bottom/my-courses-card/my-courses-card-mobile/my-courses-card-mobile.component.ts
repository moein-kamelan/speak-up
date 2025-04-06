import { Component, Input } from '@angular/core';
import { Course } from '../../../../models/courses';

@Component({
  selector: 'app-my-courses-card-mobile',
  imports: [],
  templateUrl: './my-courses-card-mobile.component.html',
  styleUrl: './my-courses-card-mobile.component.css'
})
export class MyCoursesCardMobileComponent {
@Input() course!:Course
}
