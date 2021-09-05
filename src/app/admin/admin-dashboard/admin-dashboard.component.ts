import { Component, OnInit } from '@angular/core';
import { DataService } from '../manage-categories/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  count:{}
  activecount:{}
  featurecount:{}
  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.countblog().then(res =>{
      this.count=res[0].totalcount
      console.log("blogs "+res[0].totalcount);
    })

    this.service.countfeature().then(res=>{
      this.featurecount=res[0].featureblogcount
      console.log("Feature"+res[0].featureblogcount);
    })

    this.service.countactive().then(res=>{
      this.activecount=res[0].activeblogcount
      console.log("Active"+res[0].activecount);
    })
  }

}
