import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../models/courses';
import { MyCoursesCardDesktopComponent } from './my-courses-card-desktop/my-courses-card-desktop.component';
import { MyCoursesCardMobileComponent } from './my-courses-card-mobile/my-courses-card-mobile.component';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-my-courses-card',
  imports: [  MyCoursesCardDesktopComponent , MyCoursesCardMobileComponent],
  templateUrl: './my-courses-card.component.html',
  styleUrl: './my-courses-card.component.css'
})
export class MyCoursesCardComponent implements OnInit {
@Input() course!:Course


ngOnInit(): void {
  
}

}
