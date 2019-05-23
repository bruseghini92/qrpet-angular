import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet/pet.service';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';
import { Pet } from './pet';
import { PetComponent } from './pet.component';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pet: PetComponent;
  petForm: FormGroup;


  constructor(private formBuilder: FormBuilder, public rest: PetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let petId = localStorage.getItem("showPetId");
    if (!petId) {
      alert("Invalid action.")
      this.router.navigate(['']);
      return;
    }
    this.rest.getPet(petId)
      .subscribe(data => {
        this.pet = data;
      });

  }

  editPet(pet) {
    localStorage.removeItem("editPetId");
    localStorage.setItem("editPetId", pet);
    this.router.navigate(['pet-edit']);
  }

}