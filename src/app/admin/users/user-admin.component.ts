import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../../_models/user/user.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';

@Component({
    selector: 'app-admin-user',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

    allUsers: UserComponent[];
   
    constructor(private http: HttpClient, private route: ActivatedRoute, private rest: AdminService) {
        this.rest.getUsers().subscribe((res) => {
            this.allUsers = res;
        })
    }

    ngOnInit() {
    }
}
