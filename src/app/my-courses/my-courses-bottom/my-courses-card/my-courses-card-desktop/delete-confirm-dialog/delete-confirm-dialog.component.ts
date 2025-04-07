import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../material/material.module';
import { CoursesService } from '../../../../../services/courses.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-delete-confirm-dialog',
  standalone: true,
  imports: [MaterialModule  , MatDialogModule
    ,MatButtonModule],
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.css']
})
export class DeleteConfirmDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeleteConfirmDialogComponent>, private coursesService: CoursesService, @Inject(MAT_DIALOG_DATA) public data: { id: number }) {

  }

  onConfirm() {
    const id = this.data.id;

    this.coursesService.deleteCoure(id)
    console.log("در حال حذف آیتم با آی‌دی:", id);
    this.dialogRef.close(true); // فقط تأیید ساده
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
