import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../../models/courses';
import { CourseStatusDirective } from '../../../../directives/course-status.directive';

@Component({
  selector: 'app-my-courses-card-desktop',
  imports: [RouterModule , RouterLink , CourseStatusDirective],
  templateUrl: './my-courses-card-desktop.component.html',
  styleUrl: './my-courses-card-desktop.component.css'
})
export class MyCoursesCardDesktopComponent implements OnInit {
@Input() course!:Course
ngOnInit(): void {
  console.log(this.course);
  
}




togglePopup(event:Event , popup:Element) {
  event.preventDefault()
  event.stopPropagation()
  console.log(popup);
  

}
}
