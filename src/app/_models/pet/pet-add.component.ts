import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pet } from './pet';
import { PetService } from '../../services/pet/pet.service';
import { BreedService } from '../../services/breeds/breed.service';
import { SpecieService } from '../../services/specie/specie.service';
import { Specie } from '../species/species';
import { Breed } from '../breeds/breeds';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm: FormGroup;
  newPet: Pet;
  submitted = false;
  breeds: Breed[];
  species: Specie[];
  selectedSpecie: Specie;
  selectedBreed: Breed;

  constructor(private formBuilder: FormBuilder,
    public rest: PetService, private route: ActivatedRoute,
    private router: Router, private BreedService: BreedService,
    private speciesService: SpecieService) {
    this.speciesService.getSpecies().subscribe((res) => {
      this.species = res;
    })

    this.petForm = this.formBuilder.group({
      id: [''],
      name: [''],
      birthdate: [''],
      castration: ['false'],
      mating: ['false'],
      adoptable: ['false'],
      lost: ['false'],
      //species: [this.species],
      breeds: [this.breeds],
      qrFile: [''],
      profilePic: ['']
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
    console.log('Selected breed: '+JSON.stringify(this.selectedBreed[0]) + '\n newPet: '+ JSON.stringify(this.newPet));
    this.newPet.breeds = this.selectedBreed[0];
    //this.newPet.species = this.selectedSpecie;
    console.log(JSON.stringify(this.newPet))
    this.rest.addPet(this.newPet).subscribe((result) => {
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
    });
  }

  doSomething() {
    //console.log('breeds: '+JSON.stringify(this.selectedSpecie.breeds));
    this.breeds = this.selectedSpecie.breeds;
    /*this.BreedService.getBreedsbySpecies(this.selectedSpecie.id).subscribe((res) => {
      //this.breeds = this.selectedSpecie;
    })*/
  }

  //esta funcion pedorra hace que puedas acceder desde el formulario con f. a los campos
  get f() { return this.petForm.controls; }

}