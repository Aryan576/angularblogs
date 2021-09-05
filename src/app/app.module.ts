import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { CmspageModule } from './cmspage/cmspage.module';
import { AdminModule } from './admin/admin.module';
import { LogModule } from './log/log.module';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { DataTablesModule } from 'angular-datatables';
import { BlogpostModule } from './blogpost/blogpost.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    HomeComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    LogModule,
    AuthModule,
    AdminModule,
    CmspageModule,
    BlogpostModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    DataTablesModule,
   

    AppRoutingModule,
    
    MDBBootstrapModule.forRoot()
  ],
  providers: [ MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
