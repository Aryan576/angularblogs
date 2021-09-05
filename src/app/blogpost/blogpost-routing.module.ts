import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedComponent } from './featured/featured.component';
import { ActiveComponent } from './active/active.component';
import { ReadfeatureComponent } from './readfeature/readfeature.component';
import { ReadactiveComponent } from './readactive/readactive.component';


const routes: Routes = [
  {path:'featured',component:FeaturedComponent},
  {path:'active',component:ActiveComponent},
  { path: "readfeature/:id", component: ReadfeatureComponent},
  { path: "readactive/:id", component: ReadactiveComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpostRoutingModule { }
