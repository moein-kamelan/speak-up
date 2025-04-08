import { Component, InjectionToken, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MaterialModule } from '../../../../material/material.module';
import { FormsModule, NgForm } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { CoursesService } from '../../../../services/courses.service';
import { Course } from '../../../../models/courses';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule, NgFor } from '@angular/common';
import { CourseStatus } from '../../../../course-status';
@Component({
  selector: 'app-add-confirm-modal',
  imports: [MatInputModule , 
    MatFormFieldModule ,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule ,
    CommonModule
  ],
  templateUrl: './add-confirm-modal.component.html',
  styleUrl: './add-confirm-modal.component.css'
})
export class AddConfirmModalComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddConfirmModalComponent>,
    private coursesService: CoursesService
    
  ) {
    console.log("coursesService" , coursesService);

  }
  courseStatus = CourseStatus
  statusOptions: string[] = [];

  ngOnInit(): void {
    this.statusOptions = Object.values(this.courseStatus)
    
    
  }
  onCancel() {
    this.dialogRef.close(false)

  }
onConfirm(formValid:any) {
  this.dialogRef.close(true)

}

onSubmit(form:NgForm) {
console.log(form.value);
const newCourse = {  img : "/images/hero-img.png" , ...form.value }
    console.log("newCourse" ,newCourse);

    this.coursesService.createCourse(newCourse)

}
  

}



