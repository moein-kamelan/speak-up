import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../../models/courses';
import { CourseStatusDirective } from '../../../../directives/course-status.directive';
import { MaterialModule } from '../../../../material/material.module';

@Component({
  selector: 'app-my-courses-card-desktop',
  imports: [RouterModule , RouterLink , CourseStatusDirective ,MaterialModule],
  templateUrl: './my-courses-card-desktop.component.html',
  styleUrl: './my-courses-card-desktop.component.css'
})
export class MyCoursesCardDesktopComponent implements OnInit {
@Input() course!:Course
ngOnInit(): void {
  console.log(this.course);
  
}




togglePopup(event:Event , menu:any) {
  event.preventDefault()
  event.stopPropagation()
  console.log(menu);
  

}
}
