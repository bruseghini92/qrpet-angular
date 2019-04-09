import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { PetService } from 'src/app/services/pet/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RaceComponent } from '../races/races';
import { SpecieComponent } from '../species/species';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  id: string;
  name: string;
  user: UserComponent;
  castration: boolean;
  lost: boolean;
  birthdate: Date;
  species: SpecieComponent;
  races: RaceComponent;

  pets: any = [];

  constructor(public rest: PetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.pets = [];
    this.rest.getPets().subscribe((data: {}) => {
      console.log(data);
      this.pets = data;
    });
  }

  add() {
    this.router.navigate(['pet-add']);
  }

}
