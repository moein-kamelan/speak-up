import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    MatSlideToggleModule ,
    MatIconModule
    
  ],
  exports: [
    MatSlideToggleModule ,
    MatIconModule
  ]
})
export class MaterialModule { }
