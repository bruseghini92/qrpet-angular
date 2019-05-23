import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserComponent } from './_models/user/user.component';
import { AuthenticationService } from './services/authentication.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: UserComponent;
    isAdmin1: boolean;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        this.isAdmin1 = false;
        if (localStorage.getItem('role')) {
            if (localStorage.getItem('role').localeCompare('ROLE_ADMIN') === 0) {
                this.isAdmin1 = true;
            }
        }
        return this.currentUser && this.isAdmin1;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}