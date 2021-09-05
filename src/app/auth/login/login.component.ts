import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addform: FormGroup;
  returnurl:string;
  constructor(private service :AuthService,private rut:Router,private messageService: MessageService) { }

  ngOnInit() {
    this.addform=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })

  }
  
  login(){
    if(this.addform.valid){

      
    this.service.getadmin(this.addform.value).subscribe(res=>{
      if(res['data']!=''){
        this.messageService.add({severity:'success', summary:'Admin Message', detail:'Admin Login'});
        sessionStorage.setItem("islogin","true");
        this.rut.navigate(['/admin']);
      }
   
      
    
      else{
        this.messageService.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
        this.rut.navigate(['/login']);
      }
    })
      
    }



  }


}
