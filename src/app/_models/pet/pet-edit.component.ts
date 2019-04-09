import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PetService } from 'src/app/services/pet/pet.service';
import { PetComponent } from './pet.component';
import { Pet } from './pet';

@Component({
    selector: 'pet-edit',
    templateUrl: './pet-edit.component.html',
    styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

    //currentUser : UserComponent;
    petForm: FormGroup;
    //editedUser : User;
    submitted = false;

    constructor(private formBuilder: FormBuilder, public rest: PetService, private route: ActivatedRoute, private router: Router) {
        //this.currentUser = a.currentUserValue;
    }

    ngOnInit() {
        let petId = localStorage.getItem("editPetId");
        if (!petId) {
            alert("Invalid action.")
            this.router.navigate(['']);
            return;
        }
        this.petForm = this.formBuilder.group({
            id: [''],
            name: [''],
            birthdate: [''],
            castration: [null, Validators.required],
            lost: [null, Validators.required],
            qrcode: [],
            species: [''],
            races: ['']
        });
        this.rest.getPet(+petId)
            .subscribe(data => {
                this.petForm.setValue(data);
            });
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