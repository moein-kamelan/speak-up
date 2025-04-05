import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit{
@Input() course:any 
ngOnInit(): void {
  console.log(this.course);
  
}
}
