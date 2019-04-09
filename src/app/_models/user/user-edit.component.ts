import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './user';
import { UserComponent } from './user.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
      name: [this.currentUser.name],
      lastName: [this.currentUser.lastName],
      dni: [this.currentUser.dni],
      password: [this.currentUser.password],
      email: [this.currentUser.email],
      username: [this.currentUser.username],
      telephone: [this.currentUser.telephone],
      address: [this.currentUser.address],
      state: [this.currentUser.state],
      city: [this.currentUser.city],
      country: [this.currentUser.country],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.rest.updateUser(new User(this.userForm.value)).subscribe((result) => {
      this.router.navigate(['/product-details/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}