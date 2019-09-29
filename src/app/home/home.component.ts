import { Component } from '@angular/core';

import { UserComponent } from '../_models/user/user.component';
import { PetService } from '../services/pet/pet.service';
import { PetComponent } from '../_models/pet/pet.component';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { Pet } from '../_models/pet/pet';
import { Observable } from 'rxjs';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {

    user: UserComponent;
    pets: PetComponent[];

    constructor(a: AuthenticationService, private router: Router, private petService: PetService) {
        this.user = a.currentUserValue;
            //this.petService.getPets().subscribe((res) => {
              //this.pets = res;
              this.pets = this.user.pets;
              localStorage.removeItem('allPets');
              localStorage.setItem('allPets',JSON.stringify(this.pets));
            //});
            console.log(JSON.stringify(this.user));
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
        localStorage.removeItem("editPet");
        localStorage.setItem("editPet", pet.toString());
        this.router.navigate(['pet-edit']);
    }

    detailPet(id) {
        localStorage.removeItem("showPetId");
        localStorage.setItem("showPetId", id);
        this.router.navigate(['pet-detail']);
    }

    lostPet(id) {
        if(confirm("¿Se ha perdido tu mascota?")) {
            console.log("id: "+id)
            this.petService.setLostPetById(id);
            window.location.reload();
        }
    }

    adoptionPet(id) {
        if(confirm("¿Quieres poner en adopcion a tu mascota?")) {
            this.petService.setAdoptablePetById(id);
            window.location.reload();
        }
    }

    castrationPet(id) {
        if(confirm("¿Has castrado a tu mascota?")) {
            this.petService.setCastrationById(id);
            window.location.reload();
        }
    }

    matingPet(id) {
        if(confirm("¿Quieres pareja para tu mascota?")) {
            this.petService.setMatingById(id);
            window.location.reload();
        }
    }

    getQR(id: any) {
        this.petService.downloadQR(id)
      .then(blob=> {
         saveAs(blob, 'qrpets/qrcode-'+id+'.png');
      });
    }
}