import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../manage-categories/data.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  validatingForm: FormGroup;
  category:{};
  fileupload:File=null;
  uploadedfile=[];
  id=0;
  updatebolg:{};
  imagepath:string;
  constructor(private service:DataService,private messageService:MessageService,private route:ActivatedRoute){};

  ngOnInit() {
    this.id=this.route.snapshot.params.id

    this.service.dispcategory().then(res=>{
      this.category=res;
    })

    if(this.id){

      this.service.getblogByid(this.id).then(res =>{
        this.updatebolg=res;

        
      this.validatingForm = new FormGroup({
        id:new FormControl(this.updatebolg[0].id,Validators.required),
        title: new FormControl(this.updatebolg[0].title, Validators.required),
        c_id: new FormControl(this.updatebolg[0].c_id, Validators.required),
        isfeatured: new FormControl(this.updatebolg[0].isfeatured, Validators.required),
        isactive: new FormControl(this.updatebolg[0].isactive, Validators.required),
        image:new FormControl(this.uploadedfile),
        description:new FormControl(this.updatebolg[0].description, Validators.required),
        date:new FormControl(new Date())
      });
        this.imagepath=this.updatebolg[0].image

      })



    }

    this.validatingForm = new FormGroup({
      title: new FormControl('', Validators.required),
      c_id: new FormControl('', Validators.required),
      isfeatured: new FormControl('', Validators.required),
      isactive: new FormControl('', Validators.required),
      image:new FormControl(this.uploadedfile),
      description:new FormControl('', Validators.required),
      date:new FormControl(new Date())
    });


  }



  handlefileInput(files:FileList){
    if(files.length >0){
      this.fileupload=files.item(0)
      this.service.postFile(files.item(0)).subscribe(i =>{
        console.log("image"+i["name"]);
        this.uploadedfile.push(i["name"]);

      })

    }

  }

  submit(){

    if(this.id){
      this.service.updateblog(this.validatingForm.value).subscribe(res =>{
        console.log('updated')

      })
    }

    else{

        console.log(this.validatingForm.value);
        if(this.validatingForm.valid){

          this.messageService.add({severity:'success', summary: 'Success Message', detail:'Blogs Added'});
        this.service.addblog(this.validatingForm.value).subscribe(res => {
      
          console.log(res);
        });
      }
    else{
      this.messageService.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
    }
  }
}

}
