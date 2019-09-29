import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { PetComponent } from './_models/pet/pet.component';
import { BreedComponent } from './_models/breeds/breeds.component';
import { SpecieComponent } from './_models/species/species.component';
import { UserComponent } from './_models/user/user.component';
import { PetAddComponent } from './_models/pet/pet-add.component';
import { UserEditComponent } from './_models/user/user-edit.component';
import { PetEditComponent } from './_models/pet/pet-edit.component';
import { Role } from './_models/role/role';
import { LostPetComponent } from './lostPet/lostPet.component';
import { AdoptablePetsComponent } from './adoptablePets/adoptablePets.component';
import { AdminComponent } from './admin/admin.component';
import { PetDetailComponent } from './_models/pet/pet-detail.component';
import { RegisterComponent } from './register/register.component';
import { UserAdminComponent } from './admin/users/user-admin.component';
import { PetAdminComponent } from './admin/pets/pet-admin.component';
import { SpecieAdminComponent } from './admin/species/specie-admin.component';
import { BreedAdminComponent } from './admin/breeds/breed-admin.component';
import { IndexComponent } from './index/index.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        routing,
        JwtModule.forRoot({
            config: {
                tokenGetter: function tokenGetter() {
                    return localStorage.getItem('Authorization');
                },
                whitelistedDomains: ['localhost:8080'],
                //blacklistedRoutes: ['http://localhost:8080/api/auth/login']
            }
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        PetComponent,
        RegisterComponent,
        PetDetailComponent,
        PetAddComponent,
        UserComponent,
        LostPetComponent,
        AdoptablePetsComponent,
        Role,
        PetEditComponent,
        UserEditComponent,
        BreedComponent,
        SpecieComponent,
        AdminComponent,
        UserAdminComponent,
        PetAdminComponent,
        SpecieAdminComponent,
        BreedAdminComponent,
        IndexComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }