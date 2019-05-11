import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';
import { UserComponent } from './user.component';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  currentUser: UserComponent;
  userForm: FormGroup;
  editedUser: User;
  submitted = false;

  constructor(private a: AuthenticationService, private formBuilder: FormBuilder, public rest: UserService, private route: ActivatedRoute, private router: Router) {
    this.currentUser = a.currentUserValue;
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: [this.currentUser.id],
      name: [this.currentUser.name,[Validators.required, Validators.minLength(6)]],
      lastName: [this.currentUser.lastName,[Validators.required, Validators.minLength(6)]],
      password: [this.currentUser.password],
      email: [this.currentUser.email,[Validators.required, Validators.email]],
      username: [this.currentUser.username,[Validators.required, Validators.minLength(6)]],
      roles: [this.currentUser.roles],
      telephone: [this.currentUser.telephone,[Validators.required, Validators.minLength(6)]],
      address: [this.currentUser.address,[Validators.required, Validators.minLength(6)]],
      state: [this.currentUser.state,[Validators.required, Validators.minLength(4)]],
      city: [this.currentUser.city,[Validators.required, Validators.minLength(4)]],
      country: [this.currentUser.country,[Validators.required, Validators.minLength(4)]],
    });
  }

  //esta funcion pedorra hace que puedas acceder desde el formulario con f. a los campos
  get f() { return this.userForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.rest.updateUser(new User(this.userForm.value)).subscribe((result) => {
      localStorage.currentUser = JSON.stringify(result);
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
    });
  }
}