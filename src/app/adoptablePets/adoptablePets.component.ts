import { OnInit, Component } from '@angular/core';
import { PetComponent } from '../_models/pet/pet.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../services/pet/pet.service';

@Component({
  selector: 'app-adoptablePets',
  templateUrl: './adoptablePets.component.html',
  styleUrls: ['./adoptablePets.component.css']
})
export class AdoptablePetsComponent implements OnInit {

    pets:PetComponent[];

    constructor(public rest: PetService, private route: ActivatedRoute, private router: Router){
        this.rest.adoptablePets().subscribe((res) => {
          this.pets = res;
        })
    }
  
    ngOnInit() {
      
    }
  
  }
  