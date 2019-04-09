import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { PetComponent } from './_models/pet/pet.component';
import { RaceComponent } from './_models/races/races';
import { SpecieComponent } from './_models/species/species';
import { UserComponent } from './_models/user/user.component';
import { PetAddComponent } from './_models/pet/pet-add.component';
import { UserEditComponent } from './_models/user/user-edit.component';
import { PetEditComponent } from './_models/pet/pet-edit.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
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
        PetAddComponent,
        UserComponent,
        PetEditComponent,
        UserEditComponent,
        //RaceComponent,
        //SpecieComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }