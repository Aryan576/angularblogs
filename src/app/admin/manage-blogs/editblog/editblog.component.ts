import { Component, OnInit } from '@angular/core';
import { DataService } from '../../manage-categories/data.service';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  id = 0;
  Blogs = {};
  validatingForm: FormGroup;
  category:{};
  constructor(private service:DataService,private messageService:MessageService,private routes: ActivatedRoute,private rut:Router){};

 async ngOnInit() {

    await this.service.dispcategory().then(res=>{
      this.category=res;
    });

    console.log(this.routes);
    this.id = this.routes.snapshot.params.id;
    console.log(this.id);
    await this.service.getblogByid(this.id).then(res => {
      this.Blogs = res;
      console.log(res);
    })



    this.validatingForm = new FormGroup({
      id:new FormControl(this.Blogs[0].id,Validators.required),
      title: new FormControl(this.Blogs[0].title, Validators.required),
      c_id: new FormControl(this.Blogs[0].c_id, Validators.required),
      isfeatured: new FormControl(this.Blogs[0].isfeatured, Validators.required),
      isactive: new FormControl(this.Blogs[0].isactive, Validators.required),
      description:new FormControl(this.Blogs[0].description, Validators.required),
      date:new FormControl(new Date())
    });
  }

  submit(){
    this.service.updateblog(this.validatingForm.value).subscribe(res=>{
      console.log(res);
    })
    this.rut.navigate(['./admin/manage-blogs/listblog']);


  }

}
