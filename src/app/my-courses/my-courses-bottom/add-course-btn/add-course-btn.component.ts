import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../../../material/material.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { CourseStatus } from '../../../course-status';

@Component({
  selector: 'app-add-course-btn',
  imports: [MatInputModule , 
    MatFormFieldModule ,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule ,
    MaterialModule , MatDialogModule],
  templateUrl: './add-course-btn.component.html',
  styleUrl: './add-course-btn.component.css'
})
export class AddCourseBtnComponent {
  constructor(private dialog: MatDialog) {} 
  onAddClick() {

    const dialogRef = this.dialog.open(ModalComponent , {
      disableClose:true,
      data : {
        title : "اضافه کردن دوره",
        fields : [
          {name : "title" , label : "عنوان" , type : "string"},
          {name : "level" , label : "سطح" , type : "string"},
          {name : "term" , label : "ترم" , type : "string"},
          {name : "startTime" , label : "زمان شروع" , type : "string"},
          {name : "members" , label : "تعداد عضو" , type : "number"},
          {name : "status" , label : "وضعیت" , type : "select" , options : [CourseStatus.InProgress , CourseStatus.WaitingForCapacity , CourseStatus.WaitingToStart , CourseStatus.Finished]},
          {name : "date" , label : "تاریخ" , type : "string"},
          {name : "hour" , label : "ساعت" , type : "string"},
        ]
        ,
        submitButtonText : "اضافه"
        ,
        submitButtonIcon : "add"
      }
    })

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
      
        console.log('اضافه کردن تأیید شد');
      } else {
        console.log('اضافه کردن لغو شد');
      }
    });
    
  }
  

}
