import { Routes } from '@angular/router';







export const routes: Routes = [

  {
    path: 'myCourses/courseDetails',
    title: 'courseDetails',
    loadChildren: () => import('./my-courses/my-courses.module').then(m => m.MyCoursesModule)
  
  },
  { path: 'myCourses', title: 'myCourses', loadComponent: () => import('./my-courses/my-courses.component').then(m => m.MyCoursesComponent) },
  {path : "dashboard" , title : "dashboard" , loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: '',  redirectTo:"dashboard" , pathMatch : "full" },

];
