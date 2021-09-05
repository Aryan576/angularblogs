import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LogModule } from '../log/log.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LogModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
