import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../../../../models/courses';
import { MaterialModule } from '../../../../material/material.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { EditConfirmModalComponent } from './edit-confirm-modal/edit-confirm-modal.component';
import { AddConfirmModalComponent } from '../../add-course-btn/add-confirm-modal/add-confirm-modal.component';
import { CourseStatusDirective } from '../../../../directives/course-status.directive';
@Component({
  selector: 'app-my-courses-card-desktop',
  imports: [RouterModule , RouterLink  , MaterialModule , MatDialogModule , CourseStatusDirective],
  templateUrl: './my-courses-card-desktop.component.html',
  styleUrl: './my-courses-card-desktop.component.css'
})
export class MyCoursesCardDesktopComponent implements OnInit {
@Input() course!:Course

constructor(private dialog: MatDialog) {
  
}

onDeleteClick( id:number ) {
  
  const dialogRef = this.dialog.open(DeleteConfirmDialogComponent , {data : {id : id} })

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      console.log('حذف تأیید شد');
    } else {
      console.log('حذف لغو شد');
    }
  });
}

onEditClick(course: Course) {
  const dialogRef = this.dialog.open(EditConfirmModalComponent , {data : {course} })

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
    
      console.log('ویرایش تأیید شد');
    } else {
      console.log('ویرایش لغو شد');
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
