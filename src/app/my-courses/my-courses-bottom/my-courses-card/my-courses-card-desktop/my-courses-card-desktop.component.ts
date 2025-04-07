import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../../models/courses';
import { CourseStatusDirective } from '../../../../directives/course-status.directive';

@Component({
  selector: 'app-my-courses-card-desktop',
  imports: [RouterModule , RouterLink  , MaterialModule , MatDialogModule],
  templateUrl: './my-courses-card-desktop.component.html',
  styleUrl: './my-courses-card-desktop.component.css',
})
export class MyCoursesCardDesktopComponent implements OnInit {
  @Input() course!: Course;

  constructor(private dialog: MatDialog) {}

  onDeleteClick(id: number) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // کار حذف انجام شود
        console.log('حذف تأیید شد');
      } else {
        // حذف لغو شد
        console.log('حذف لغو شد');
      }
    });
  }

  onEditClick(course:Course) {
    const dialogRef = this.dialog.open(EditConfirmModalComponent, {
      data: { course: course },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // کار حذف انجام شود
        console.log('حذف تأیید شد');
      } else {
        // حذف لغو شد
        console.log('حذف لغو شد');
      }
    });
  }

ngOnInit(): void {
  
}




togglePopup(event:Event , popup:any) {
  event.preventDefault()
  event.stopPropagation()


  
  

}
}
