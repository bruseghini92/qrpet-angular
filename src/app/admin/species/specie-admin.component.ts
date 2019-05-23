import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import { SpecieComponent } from '../../_models/species/species.component';

@Component({
    selector: 'app-admin-specie',
    templateUrl: './specie-admin.component.html',
    styleUrls: ['./specie-admin.component.css']
})
export class SpecieAdminComponent implements OnInit {

    allSpecies: SpecieComponent[];

    constructor(private http: HttpClient, private route: ActivatedRoute, private rest: AdminService) {
        this.rest.getSpecies().subscribe((res) => {
            this.allSpecies = res;
        })
        
    }

    ngOnInit() {
    }
}
