import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-dashboard-top-course',
  imports: [DatePipe],
  templateUrl: './dashboard-top-course.component.html',
  styleUrl: './dashboard-top-course.component.css'
})
export class DashboardTopCourseComponent {

 @Input() course:any
  


}
