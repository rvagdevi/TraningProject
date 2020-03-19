import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AdminService } from '../../service/admin/admin.service';
import { Admin } from '../../bean/admin/admin';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  adminData:Admin={"id":0,"email":'',"fullname":'',"password":''};
  constructor(private adminService:AdminService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    //this.route.params.subscribe((params) => {this.adminService.getAdmin(params['id']).subscribe((result) => { this.adminData = result; })})

  }
createAdmin(){
  let flag=false;
  this.adminService.getAllAdmins().subscribe(data=>{
    for(let i=0;i<data.length;i++){
      if(data[i].email==this.adminData.email){
        alert("User already exists with the entered email Id");
        flag=true;
        break;
      }
    }
    if(flag==true)
      this.router.navigate(['adminlist/create']);
    else
      this.adminService.createAdmin(this.adminData).subscribe(data=>{this.router.navigate(['adminlist'])});
  })
}
cancel(){
  this.router.navigate(['adminlist']);
}
}
