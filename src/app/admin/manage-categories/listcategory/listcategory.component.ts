import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {
  listcategory: {};
  constructor(private service:DataService,private rut:Router,private confirmationService: ConfirmationService,private messageService: MessageService) { }

 async ngOnInit() {


    await this.service.dispcategory().then(res => {
      this.listcategory = res;

    })
  }

  delete(value){

    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({severity:'info', summary: 'Deleted', detail:'Category Deleted'});
        this.service.deletecategory(value).subscribe(res=>{
          console.log("res deleted");
          
        });
            [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
           
      },
      reject: () => {
           [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });
    

    


  }

}
