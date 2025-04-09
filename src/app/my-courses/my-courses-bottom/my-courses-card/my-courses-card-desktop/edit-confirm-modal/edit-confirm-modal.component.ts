import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../material/material.module';
import { CoursesService } from '../../../../../services/courses.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  Form,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';  
import { Course } from '../../../../../models/courses';
import { CourseStatus } from '../../../../../course-status';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-confirm-modal',
  standalone: true,
  imports: [
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,  
    CommonModule
  ],
  templateUrl: './edit-confirm-modal.component.html',
  styleUrl: './edit-confirm-modal.component.css',
})
export class EditConfirmModalComponent implements OnInit {
[x: string]: any;

courseStatus = CourseStatus
statusOptions: string[] = [];
  constructor(
    private dialogRef: MatDialogRef<EditConfirmModalComponent>,
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) public data: {course : Course}
  ) {}
  course!: Course;

  ngOnInit(): void {
    this.course = {...this.data.course};
    this.statusOptions = Object.values(this.courseStatus)
    console.log("status options", this.statusOptions );
    
  }
  onConfirm() {
    this.dialogRef.close(true);
  }

  onSubmit(form:NgForm) {
    console.log("form" , form.value);
    const updatedCourse = {id : this.data.course.id , img : "/images/hero-img.png" , ...form.value}
    console.log("updatedCourse" , updatedCourse);

    this.coursesService.updateCourse(updatedCourse)
     
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
