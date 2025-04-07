import { Component, Inject } from '@angular/core';
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
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';  
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-confirm-modal',
  standalone: true,
  imports: [
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
MatButtonModule
  ],
  templateUrl: './edit-confirm-modal.component.html',
  styleUrl: './edit-confirm-modal.component.css'
})
export class EditConfirmModalComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new ErrorStateMatcher();

  constructor(
    private dialogRef: MatDialogRef<EditConfirmModalComponent>,
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  onConfirm() {
    const id = this.data.id;
    // this.coursesService.updateCourse(user);
    console.log("در حال حذف آیتم با آی‌دی:", id);
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
