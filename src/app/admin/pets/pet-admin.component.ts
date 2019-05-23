import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import { PetComponent } from '../../_models/pet/pet.component';

@Component({
    selector: 'app-admin-pet',
    templateUrl: './pet-admin.component.html',
    styleUrls: ['./pet-admin.component.css']
})
export class PetAdminComponent implements OnInit {

    allPets: PetComponent[];

    constructor(private http: HttpClient, private route: ActivatedRoute, private rest: AdminService) {
        this.rest.getPets().subscribe((res) => {
            this.allPets = res;
        })
        
    }

    ngOnInit() {
    }
}
