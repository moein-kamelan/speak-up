import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  InjectionToken,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule, NgFor } from '@angular/common';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MomentDateAdapter, provideMomentDateAdapter  } from '@angular/material-moment-adapter';
import { default as _rollupMoment } from 'moment';
import * as _moment from 'moment';
import { CourseStatus } from '../../course-status';
import { MaterialModule } from '../../material/material.module';
import { CoursesService } from '../../services/courses.service';
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
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
  formData: any = {};
  courseStatus = CourseStatus;
  statusOptions: string[] = [];
  isEditMode = false;

  ngOnInit(): void {
    
    this.statusOptions = Object.values(this.courseStatus);
    
    this.formData = { ...this.data?.defaultValues };
    this.isEditMode = !!this.formData?.id;
    console.log("data" , this.data);
    
  }
  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    const submittedData = { img: '/images/hero-img.png', ...form.value };
    if(this.isEditMode) {
      submittedData.id = this.formData.id
    }
    console.log(submittedData);
    
    this.dialogRef.close(submittedData);
  }
}
  