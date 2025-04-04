import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { InteractionBooksComponent } from './interaction-books/interaction-books.component';
import { PracticeComponent } from './practice/practice.component';

export const routes: Routes = [

  {
    path: 'myCourses/courseDetails',
    title: 'courseDetails',
    component : CourseDetailsComponent ,
    children: [
      {
        path: 'interactionBooks',
        title: 'courseDetails',
        component: InteractionBooksComponent,
      },
      {
        path: 'practices',
        title: 'courseDetails',
        component: PracticeComponent,
      },
    ],
  },
  { path: 'myCourses', title: 'myCourses', component: MyCoursesComponent },
  { path: '', title: 'dashboard', component: DashboardComponent },

];
