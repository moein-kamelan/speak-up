import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesRoutingModule } from './my-courses-routing.module';
import { CourseStatusDirective } from '../directives/course-status.directive';
import { MyCoursesComponent } from './my-courses.component';
import { MyCoursesBottomComponent } from './my-courses-bottom/my-courses-bottom.component';
import { MyCoursesCardComponent } from './my-courses-bottom/my-courses-card/my-courses-card.component';
import { MyCoursesCardDesktopComponent } from './my-courses-bottom/my-courses-card/my-courses-card-desktop/my-courses-card-desktop.component';
import { MyCoursesCardMobileComponent } from './my-courses-bottom/my-courses-card/my-courses-card-mobile/my-courses-card-mobile.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MyCoursesRoutingModule,
    MaterialModule,
    MyCoursesComponent,
    MyCoursesBottomComponent,
    MyCoursesCardComponent,
    MyCoursesCardDesktopComponent,
    MyCoursesCardMobileComponent,
    CourseStatusDirective
  ]
})
export class MyCoursesModule { }
