import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import { BreedComponent } from '../../_models/breeds/breeds.component';

@Component({
    selector: 'app-admin-Breed',
    templateUrl: './breed-admin.component.html',
    styleUrls: ['./breed-admin.component.css']
})
export class BreedAdminComponent implements OnInit {

    allBreeds: BreedComponent[];

    constructor(private http: HttpClient, private route: ActivatedRoute, private rest: AdminService) {
        this.rest.getBreeds().subscribe((res) => {
            this.allBreeds = res;
        })
        
    }

    ngOnInit() {
    }
}
