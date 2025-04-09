import { Component } from '@angular/core';
import { AddConfirmModalComponent } from './add-confirm-modal/add-confirm-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../../../material/material.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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

    const dialogRef = this.dialog.open(AddConfirmModalComponent , {
      disableClose:true
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
