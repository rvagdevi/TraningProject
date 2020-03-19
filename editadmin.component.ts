import { Component, OnInit } from '@angular/core';
import { Admin } from '../../bean/admin/admin';
import { AdminService } from '../../service/admin/admin.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {
  adminData: Admin = { "id": 0, "email": '', "fullname": '', "password": '' };
  constructor(private adminService: AdminService,private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {this.adminService.getAdmin(params['id']).subscribe((result) => { this.adminData = result; })})
  }
  edit() {
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
      this.router.navigate(['adminlist/edit',this.adminData.id]);
    else
      this.adminService.createAdmin(this.adminData).subscribe(data=>{this.router.navigate(['adminlist'])});
  })
  }

  cancel(){
    this.router.navigate(['adminlist']);
  }
}
