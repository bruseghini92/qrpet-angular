import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/services/pet/pet.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetComponent } from './pet.component';
import { Pet } from './pet';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm: FormGroup;
  newPet: Pet;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public rest: PetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.petForm = this.formBuilder.group({
      id: [''],
      name: [''],
      birthdate: [''],
      castration: [''],
      lost: [''],
      //species: [''],
      //races: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.petForm.invalid) {
      return;
    }
    this.rest.addPet(new Pet(this.petForm.value)).subscribe((result) => {
      this.router.navigate(['/product-details/' + result._id]);
    }, (err) => {
      console.log(err);
    });
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.petForm.value))
  }

  /* addPet() {
     
   }*/

}