import { OnInit, Component } from '@angular/core';
import { PetComponent } from '../_models/pet/pet.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../services/pet/pet.service';

@Component({
  selector: 'app-lostPet',
  templateUrl: './lostPet.component.html',
  styleUrls: ['./lostPet.component.css']
})
export class LostPetComponent implements OnInit {

    pets:PetComponent[];

    constructor(public rest: PetService, private route: ActivatedRoute, private router: Router){
        this.rest.lostPets().subscribe((res) => {
          this.pets = res;
        })
    }
  
    ngOnInit() {
      
    }
  
  }
  