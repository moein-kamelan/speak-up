import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../../models/courses';

@Component({
  selector: 'app-my-courses-card-desktop',
  imports: [RouterModule , RouterLink],
  templateUrl: './my-courses-card-desktop.component.html',
  styleUrl: './my-courses-card-desktop.component.css'
})
export class MyCoursesCardDesktopComponent implements OnInit {
@Input() course!:Course
ngOnInit(): void {
  console.log(this.course);
  
}




togglePopup(event:Event) {
  event.preventDefault()
}
}
