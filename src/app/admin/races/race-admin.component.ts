import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import { RaceComponent } from '../../_models/races/races.component';

@Component({
    selector: 'app-admin-race',
    templateUrl: './race-admin.component.html',
    styleUrls: ['./race-admin.component.css']
})
export class RaceAdminComponent implements OnInit {

    allRaces: RaceComponent[];

    constructor(private http: HttpClient, private route: ActivatedRoute, private rest: AdminService) {
        this.rest.getRaces().subscribe((res) => {
            this.allRaces = res;
        })
        
    }

    ngOnInit() {
    }
}
