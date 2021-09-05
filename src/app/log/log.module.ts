import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ]
})
export class LogModule { }
