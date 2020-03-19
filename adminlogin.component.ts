import { Component, OnInit } from '@angular/core';
import { Admin } from '../../bean/admin/admin';
import { AdminService } from '../../service/admin/admin.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin:Admin={"id":0,"email":'',"fullname":'',"password":''};
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
  }
  login(){
    //console.log(this.admin);
    // this.admin.id=this.adminService.login(this.admin);
    // console.log(this.adminService.Admin.id);
    // console.log(this.admin.id);
    // if(this.admin.id){this.router.navigate(['adminhomepage'])}
    // else{alert("login denied")}
    this.adminService.login(this.admin).subscribe(data=>{
      if(this.admin.password==data.password){
        this.router.navigate(['adminhomepage',data.id]);
      }
      else{
        alert("login denied");
      }
    })
  }
}
