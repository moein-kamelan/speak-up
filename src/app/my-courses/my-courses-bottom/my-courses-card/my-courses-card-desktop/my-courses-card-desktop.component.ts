import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../../models/courses';
import { MaterialModule } from '../../../../material/material.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { CourseStatusDirective } from '../../../../directives/course-status.directive';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { data } from 'jquery';
import { CourseStatus } from '../../../../course-status';
import { CoursesService } from '../../../../services/courses.service';
@Component({
  selector: 'app-my-courses-card-desktop',
  imports: [
    RouterModule,
    RouterLink,
    MaterialModule,
    MatDialogModule,
    CourseStatusDirective,
    DatePipe
  ],
  templateUrl: './my-courses-card-desktop.component.html',
  styleUrl: './my-courses-card-desktop.component.css',
})
export class MyCoursesCardDesktopComponent implements OnInit {
  @Input() course!: Course;

  constructor(private dialog: MatDialog ,private coursesService:CoursesService) {}

  onDeleteClick(id: number) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {

        this.coursesService.deleteCoure(result)
      }
    });
  }

  onEditClick(course: Course) {
    const dialogRef = this.dialog.open(ModalComponent, {
      disableClose:true,
      data: {
          title : "ویرایش دوره",
          fields: [
            { name: 'title', label: 'عنوان', type: 'text' ,required : true },
            { name: 'level', label: 'سطح', type: 'text' ,required : true },
            { name: 'term', label: 'ترم', type: 'text' ,required : true },
            { name: 'startTime', label: 'زمان شروع', type: 'date' ,required : true },
            { name: 'members', label: 'تعداد عضو', type: 'number', required : true },
            { name: 'status', label: 'وضعیت', type: 'select' , options : [CourseStatus.InProgress , CourseStatus.WaitingForCapacity , CourseStatus.WaitingToStart , CourseStatus.Finished] , required : true},
            { name: 'date', label: 'تاریخ', type: 'date' ,required : true },
            { name: 'hour', label: 'ساعت', type: 'time' ,required : true },
          ],
          submitButtonText: 'ویرایش',
          submitButtonIcon: 'edit',
          defaultValues : {...course}
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.coursesService.updateCourse(result)

      }
      
    });
  }

  ngOnInit(): void {}

  togglePopup(event: Event, popup: any) {
    event.preventDefault();
    event.stopPropagation();
  }
}
