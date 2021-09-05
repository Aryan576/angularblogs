import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { DataService } from '../../manage-categories/data.service';

@Component({
  selector: 'app-listblog',
  templateUrl: './listblog.component.html',
  styleUrls: ['./listblog.component.css']
})
export class ListblogComponent implements OnInit {

  listcategory: {};
  constructor(private service:DataService,private rut:Router,private confirmationService: ConfirmationService,private messageService: MessageService) { }


  async ngOnInit() {


    await this.service.dispblog().then(res => {
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
        this.service.deleteblog(value).subscribe(res=>{
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
