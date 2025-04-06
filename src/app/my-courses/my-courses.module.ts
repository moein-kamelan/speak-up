import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MyCoursesComponent } from './my-courses.component';
import { MyCoursesCardComponent } from './my-courses-bottom/my-courses-card/my-courses-card.component';
import { MyCoursesTopComponent } from './my-courses-top/my-courses-top.component';



@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,

  ]
})
export class MyCoursesModule { }
