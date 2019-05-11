import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserComponent } from '../_models/user/user.component';
import { UserService } from '../services/user/user.service';
import { PetService } from '../services/pet/pet.service';
import { PetComponent } from '../_models/pet/pet.component';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../_models/user/user';
import { Router } from '@angular/router';
import { Pet } from '../_models/pet/pet';
import { saveAs } from 'file-saver';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {

    user: UserComponent;

    constructor(a: AuthenticationService, private router: Router, private petService: PetService) {
        this.user = a.currentUserValue;
        
    }

    ngOnInit() {

    }

    editUser() {
        this.router.navigate(['user-edit']);
    }

    addPet() {
        this.router.navigate(['pet-add']);
    }

    editPet(pet: PetComponent) {
        console.log("putocagon");
        localStorage.removeItem("editPet");
        localStorage.setItem("editPet", pet.toString());
        this.router.navigate(['pet-edit']);
    }

    getQR(id: any) {
        this.petService.downloadQR(id)
      .then(blob=> {
         saveAs(blob, 'qrpets/qrcode-'+id+'.png');
      });
    }
}