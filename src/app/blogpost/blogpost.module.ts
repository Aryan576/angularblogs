import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { FeaturedComponent } from './featured/featured.component';
import { ActiveComponent } from './active/active.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReadactiveComponent } from './readactive/readactive.component';
import { ReadfeatureComponent } from './readfeature/readfeature.component';


@NgModule({
  declarations: [FeaturedComponent, ActiveComponent, ReadactiveComponent, ReadfeatureComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    BlogpostRoutingModule
  ]
})
export class BlogpostModule { }
