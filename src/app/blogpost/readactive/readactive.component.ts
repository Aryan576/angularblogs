import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readactive',
  templateUrl: './readactive.component.html',
  styleUrls: ['./readactive.component.css']
})
export class ReadactiveComponent implements OnInit {

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

