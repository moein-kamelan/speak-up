import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { InteractionBooksComponent } from '../interaction-books/interaction-books.component';
import { PracticeCardComponent } from '../practice/practice-card/practice-card.component';

const routes: Routes = [
  {path : "" , component : CourseDetailsComponent , children : [
    {path : "interactionBooks" , component : InteractionBooksComponent },
    {path : "practices" , component : PracticeCardComponent },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCoursesRoutingModule { }
