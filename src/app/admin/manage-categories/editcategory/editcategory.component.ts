import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  id = 0;
  Category = {};
  validatingForm: FormGroup
  constructor(private service: DataService, private routes: ActivatedRoute,private rut:Router) { }

 async ngOnInit() {
   console.log(this.routes);
    this.id = this.routes.snapshot.params.id;
    console.log(this.id);
    await this.service.getcategoryByid(this.id).then(res => {
      this.Category = res;
    })

    this. validatingForm = new FormGroup(
      {
        id: new FormControl(this.Category[0].id, Validators.required),
        category: new FormControl(this.Category[0].category, Validators.required),
        

      });

  }
  
  submit(){
    this.service.updatecategory(this.validatingForm.value).subscribe(res=>{
      console.log(res);
    })
    this.rut.navigate(['./admin/manage-categories/listcategory']);

  }

}
