import { ChangeDetectionStrategy, Component, InjectionToken, OnInit, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MaterialModule } from '../../../../material/material.module';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { CoursesService } from '../../../../services/courses.service';
import { Course } from '../../../../models/courses';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule, NgFor } from '@angular/common';
import { CourseStatus } from '../../../../course-status';
import { provideNativeDateAdapter } from '@angular/material/core';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {default as _rollupMoment} from 'moment';
import * as _moment from 'moment';
const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-confirm-modal',
  imports: [MatInputModule , 
    MatFormFieldModule ,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule ,
    CommonModule,
      FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-confirm-modal.component.html',
  styleUrl: './add-confirm-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideNativeDateAdapter() ,  provideMomentDateAdapter(MY_FORMATS)],
    encapsulation: ViewEncapsulation.None,
})
export class AddConfirmModalComponent implements OnInit {

readonly date = new FormControl(moment());
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
const submittedDate = {  img : "/images/hero-img.png" , ...form.value }

this.dialogRef.close(submittedDate)

}
  

}



