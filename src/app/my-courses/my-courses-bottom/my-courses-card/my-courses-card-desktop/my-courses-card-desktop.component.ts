import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../../models/courses';
import { EditConfirmModalComponent } from './edit-confirm-modal/edit-confirm-modal.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../../../../material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-my-courses-card-desktop',
  imports: [RouterModule , RouterLink  , MaterialModule , MatDialogModule ,  MatMenuModule,
    MatIconModule,
    MatButtonModule],
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
