import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  validatingForm: FormGroup;
  constructor(private messageService:MessageService,private service:DataService){};

  ngOnInit() {
    this.validatingForm = new FormGroup({
     category: new FormControl('', Validators.required)
    });
  }
  submit(){
    if(this.validatingForm.valid){

      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Category Added'});
    this.service.addcategory(this.validatingForm.value).subscribe(res => {
   
      console.log(res);
    });
  }
  else{
    this.messageService.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
  }
  }

}
