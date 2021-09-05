import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-readfeature',
  templateUrl: './readfeature.component.html',
  styleUrls: ['./readfeature.component.css']
})
export class ReadfeatureComponent implements OnInit {

  id = 0;
  Blogs = {};
  
  category:{};
  constructor(private service:BlogService,private routes: ActivatedRoute){};

 async ngOnInit() {

    
    
    this.id = this.routes.snapshot.params.id;
    console.log(this.id);
    await this.service.getblogByid(this.id).then(res => {
      this.Blogs = res;
      console.log(res);
    })



  }

}
