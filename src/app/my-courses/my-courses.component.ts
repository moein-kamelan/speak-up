import { Component } from '@angular/core';
import { MyCoursesCardComponent } from './my-courses-bottom/my-courses-card/my-courses-card.component';
import { MyCoursesBottomComponent } from './my-courses-bottom/my-courses-bottom.component';

@Component({
  selector: 'app-my-courses',
  imports: [ MyCoursesBottomComponent],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {

}
