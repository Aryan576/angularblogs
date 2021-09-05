import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  active:{};
  constructor(private service:BlogService) { }

 async ngOnInit() {
   await this.service.dispactive().then(res=>{
      this.active=res
   })
  }
}
