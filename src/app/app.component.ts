import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserComponent } from './_models/user/user.component';
import { AuthenticationService } from './services/authentication.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: UserComponent;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        console.log("putocagon" + this.currentUser);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}