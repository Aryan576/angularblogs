import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "../auth/auth.guard";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { ManageBlogsComponent } from "./manage-blogs/manage-blogs.component";
import { ManageCategoriesComponent } from "./manage-categories/manage-categories.component";
import { ManagePagesComponent } from "./manage-pages/manage-pages.component";
import { AddcategoryComponent } from "./manage-categories/addcategory/addcategory.component";
import { ListcategoryComponent } from "./manage-categories/listcategory/listcategory.component";
import { EditcategoryComponent } from "./manage-categories/editcategory/editcategory.component";
import { AddblogComponent } from './manage-blogs/addblog/addblog.component';
import { ListblogComponent } from './manage-blogs/listblog/listblog.component';
import { EditblogComponent } from './manage-blogs/editblog/editblog.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "admin-dashboard", component: AdminDashboardComponent },
      { path: "manage-blogs", component: ManageBlogsComponent,children:[
        {path:'addblog',component:AddblogComponent},
        {path:'editblog/:id',component:AddblogComponent},

        {path:'listblog',component:ListblogComponent  }
      ]},
      {path: "manage-categories", component: ManageCategoriesComponent,
        children: [
          { path: "addcategory", component: AddcategoryComponent },
          { path: "listcategory", component: ListcategoryComponent },
        ],
      },
      { path: "manage-pages", component: ManagePagesComponent },
    ], canActivate: [AuthGuard] },
  { path: "editcategory/:id", component: EditcategoryComponent, canActivate: [AuthGuard] },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
