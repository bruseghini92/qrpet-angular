import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetService } from '../../services/pet/pet.service';
import { Pet } from './pet';

@Component({
    selector: 'pet-edit',
    templateUrl: './pet-edit.component.html',
    styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

    petForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, public rest: PetService, private route: ActivatedRoute, private router: Router) {
        let petId = localStorage.getItem("editPetId");
        if (!petId) {
            alert("Invalid action.")
            this.router.navigate(['']);
            return;
        }
        this.petForm = this.formBuilder.group({
            id: [''],
            name: ['', Validators.required],
            birthdate: ['', Validators.required],
            mating: [null, Validators.required],
            adoptable: [null, Validators.required],
            castration: [null, Validators.required],
            lost: [null, Validators.required],
            species: ['', Validators.required],
            races: ['', Validators.required]
        });
        this.rest.getPet(petId)
            .subscribe(data => {
                this.petForm.setValue(data);
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
        this.rest.updatePet(new Pet(this.petForm.value)).subscribe((result) => {
            this.router.navigate(['/']);
        }, (err) => {
            console.log(err);
        });
    }
}