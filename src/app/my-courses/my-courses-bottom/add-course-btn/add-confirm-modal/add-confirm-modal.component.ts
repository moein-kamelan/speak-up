import { Component, InjectionToken } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MaterialModule } from '../../../../material/material.module';
import { FormsModule } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { CoursesService } from '../../../../services/courses.service';
import { Course } from '../../../../models/courses';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-confirm-modal',
  imports: [MatInputModule , 
    MatFormFieldModule ,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule ],
  templateUrl: './add-confirm-modal.component.html',
  styleUrl: './add-confirm-modal.component.css'
})
export class AddConfirmModalComponent {
  constructor(
    private dialogRef: MatDialogRef<AddConfirmModalComponent>,
    private coursesService: CoursesService,
    
  ) {}

  onCancel() {
    this.dialogRef.close(false)

  }
onConfirm() {
  this.dialogRef.close(true)
}
  

}



