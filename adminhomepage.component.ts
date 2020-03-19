import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AdminService } from '../../service/admin/admin.service';
import { Admin } from '../../bean/admin/admin';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {
  admin:Admin={ "id": 0, "email": '', "fullname": '', "password": '' };
  constructor(private route:ActivatedRoute,private adminService:AdminService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {this.adminService.getAdmin(params['id']).subscribe((result) => { this.admin = result; })})
  }

}
