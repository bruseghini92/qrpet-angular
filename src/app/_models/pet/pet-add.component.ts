import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Pet } from './pet';
import { PetService } from '../../services/pet/pet.service';
import { RaceService } from '../../services/races/race.service';
import { SpecieService } from '../../services/specie/specie.service';
import { Specie } from '../species/species';
import { Race } from '../races/races';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm: FormGroup;
  newPet: Pet;
  submitted = false;
  races: Race[];
  species: Specie[];
  selectedSpecie: Specie;
  selectedRace: Race;

  constructor(private formBuilder: FormBuilder,
    public rest: PetService, private route: ActivatedRoute,
    private router: Router, private raceService: RaceService,
    private speciesService: SpecieService) {
    this.speciesService.getSpecies().subscribe((res) => {
      this.species = res;
    })

    this.petForm = this.formBuilder.group({
      id: [''],
      name: [''],
      birthdate: [''],
      castration: [''],
      mating: [''],
      adoptable: [''],
      lost: [''],
      species: [this.species],
      races: [this.races]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.petForm.invalid) {
      return;
    } 
    this.newPet = new Pet(this.petForm.value);
    this.newPet.races = this.selectedRace;
    this.newPet.species = this.selectedSpecie;
    this.rest.addPet(this.newPet).subscribe((result) => {
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
    });
  }

  doSomething() {
    this.raceService.getRacesbySpecies(this.selectedSpecie.id).subscribe((res) => {
      this.races = res;
    })
  }

  //esta funcion pedorra hace que puedas acceder desde el formulario con f. a los campos
  get f() { return this.petForm.controls; }

}