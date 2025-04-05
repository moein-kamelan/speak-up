import { Routes } from '@angular/router';






export const routes: Routes = [

  {
    path: 'myCourses/courseDetails',
    title: 'courseDetails',
    loadComponent: () => import('./course-details/course-details.component').then(m => m.CourseDetailsComponent) ,
    children: [
      {
        path: 'interactionBooks',
        title: 'courseDetails',
        loadComponent: () => import('./interaction-books/interaction-books.component').then(m => m.InteractionBooksComponent),
      },
      {
        path: 'practices',
        title: 'courseDetails',
        loadComponent: () => import('./practice/practice.component').then(m => m.PracticeComponent),
      },
    ],
  },
  { path: 'myCourses', title: 'myCourses', loadComponent: () => import('./my-courses/my-courses.component').then(m => m.MyCoursesComponent) },
  { path: '', title: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },

];
