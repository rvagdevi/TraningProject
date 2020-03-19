import { Component, OnInit } from '@angular/core';
import { Admin } from '../../bean/admin/admin';
import { AdminService } from '../../service/admin/admin.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  admins:Admin[];
  admin:Admin={ "id": 0,"email": '',"fullname": '',"password": '' };
    constructor(private adminService:AdminService,private route:ActivatedRoute) { }
  
    ngOnInit() {
      //this.route.params.subscribe((params) => {this.adminService.getAdmin(params['id']).subscribe((result) => { this.admin = result; })})
      this.adminService.getAllAdmins().subscribe((data:Admin[])=>{this.admins=data}); 
    }
    deleteAdmin(admin:Admin){
      if(window.confirm("Are you sure you want to delete the user with id"+admin.id))
      this.adminService.deleteAdmin(admin).subscribe((data)=>{this.admins=this.admins.filter(c=>c!==admin)});
    }
    
}
