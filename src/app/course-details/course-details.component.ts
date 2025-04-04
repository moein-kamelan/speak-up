import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CourseBookComponent } from '../course-book/course-book.component';

@Component({
  selector: 'app-course-details',
  imports: [RouterLink , RouterModule , CourseBookComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {

}
