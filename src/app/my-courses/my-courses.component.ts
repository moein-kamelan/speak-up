import { Component } from '@angular/core';
import { MyCoursesCardComponent } from '../my-courses-card/my-courses-card.component';

@Component({
  selector: 'app-my-courses',
  imports: [MyCoursesCardComponent],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {

}
