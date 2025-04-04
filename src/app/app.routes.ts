import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const routes: Routes = [
    { path : "myCourses/courseDetails" , title : "courseDetails" , component : CourseDetailsComponent},
    { path : "myCourses" , title : "myCourses" , component : MyCoursesComponent},
    { path : "" , title : "dashboard" , component : DashboardComponent},
];
