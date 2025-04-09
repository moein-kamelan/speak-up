import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../../models/courses';
import { MaterialModule } from '../../../../material/material.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { EditConfirmModalComponent } from './edit-confirm-modal/edit-confirm-modal.component';
import { CourseStatusDirective } from '../../../../directives/course-status.directive';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { data } from 'jquery';
import { CourseStatus } from '../../../../course-status';
@Component({
  selector: 'app-my-courses-card-desktop',
  imports: [
    RouterModule,
    RouterLink,
    MaterialModule,
    MatDialogModule,
    CourseStatusDirective,
  ],
  templateUrl: './my-courses-card-desktop.component.html',
  styleUrl: './my-courses-card-desktop.component.css',
})
export class MyCoursesCardDesktopComponent implements OnInit {
  @Input() course!: Course;

  constructor(private dialog: MatDialog) {}

  onDeleteClick(id: number) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        console.log('حذف تأیید شد');
      } else {
        console.log('حذف لغو شد');
      }
    });
  }

  onEditClick(course: Course) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        course,
        data: {
          title : "ویرایش دوره",
          fields: [
            { name: 'title', label: 'عنوان', type: 'string' },
            { name: 'level', label: 'سطح', type: 'string' },
            { name: 'term', label: 'ترم', type: 'string' },
            { name: 'startTime', label: 'زمان شروع', type: 'string' },
            { name: 'members', label: 'تعداد عضو', type: 'number' },
            { name: 'status', label: 'وضعیت', type: 'select' , options : [CourseStatus.InProgress , CourseStatus.WaitingForCapacity , CourseStatus.WaitingToStart , CourseStatus.Finished] },
            { name: 'date', label: 'تاریخ', type: 'string' },
            { name: 'hour', label: 'ساعت', type: 'string' },
          ],
          submitButtonText: 'ویرایش',
          submitButtonIcon: 'edit',
          defaultValuess : {...course}
        },
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        console.log('ویرایش تأیید شد');
      } else {
        console.log('ویرایش لغو شد');
      }
    });
  }

  ngOnInit(): void {}

  togglePopup(event: Event, popup: any) {
    event.preventDefault();
    event.stopPropagation();
  }
}
