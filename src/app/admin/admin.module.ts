import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { AddcategoryComponent } from './manage-categories/addcategory/addcategory.component';
import { ListcategoryComponent } from './manage-categories/listcategory/listcategory.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditcategoryComponent } from './manage-categories/editcategory/editcategory.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { DataTablesModule } from 'angular-datatables';
import { AddblogComponent } from './manage-blogs/addblog/addblog.component';
import { ListblogComponent } from './manage-blogs/listblog/listblog.component';
import { EditblogComponent } from './manage-blogs/editblog/editblog.component';




@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, ManageBlogsComponent, ManageCategoriesComponent, ManagePagesComponent, AddcategoryComponent, ListcategoryComponent, EditcategoryComponent, AddblogComponent, ListblogComponent, EditblogComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ConfirmDialogModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot(),

    AdminRoutingModule
  ]
})
export class AdminModule { }
