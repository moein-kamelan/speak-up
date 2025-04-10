import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../../../material/material.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { CourseStatus } from '../../../course-status';
import { CoursesService } from '../../../services/courses.service';

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
  constructor(private dialog: MatDialog ,private coursesService: CoursesService) {} 
  onAddClick() {

    const dialogRef = this.dialog.open(ModalComponent , {
      disableClose:true,
      data : {
        title : "اضافه کردن دوره",
        fields : [
          {name : "title" , label : "عنوان" , type : "text" , required : true},
          {name : "level" , label : "سطح" , type : "text" , required : true},
          {name : "term" , label : "ترم" , type : "text" , required : true},
          {name : "startTime" , label : "زمان شروع" , type : "date" , required : true},
          {name : "members" , label : "تعداد عضو" , type : "number" , required : true},
          {name : "status" , label : "وضعیت" , type : "select" , options : [CourseStatus.InProgress , CourseStatus.WaitingForCapacity , CourseStatus.WaitingToStart , CourseStatus.Finished] , required : true},
          {name : "date" , label : "تاریخ" , type : "date" , required : true},
          {name : "hour" , label : "ساعت" , type : "time" , required : true},
        ]
        ,
        submitButtonText : "اضافه"
        ,
        submitButtonIcon : "add"
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {

        this.coursesService.createCourse(result)
      }
      
     
    });
    
  }
  

}
