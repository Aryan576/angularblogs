import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  feature:{};
  validatingForm: FormGroup;
  id=0;
  Difference_In_Time;
  Difference_In_Days;
   constructor(private service:BlogService) { }

 async ngOnInit() {
  var dat = new Date();

   await this.service.dispfeatured().then(res=>{
      this.feature=res
      console.log(res);
      console.log("d"+res[0].date);

      for(var i=0;i<=res.length;i++){
        var dt= new Date(res[i].date);

        this.Difference_In_Time=dat.getTime()-dt.getTime();
        this.Difference_In_Days=Math.round(this.Difference_In_Time/(1000*3600*24));

        if(this.Difference_In_Days >1){
          this.service.updatefeature(res[i].id).subscribe(res=>{
            console.log("feature updated"+res);
          })

        }
      }
   })

   
  }

}




