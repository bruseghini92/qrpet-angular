import { Component, OnInit } from '@angular/core';
import { Role } from '../role/role';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PetComponent } from '../pet/pet.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  id: string;
  name: string;
  lastName: string;
  dni: string;
  email: string;
  username: string;
  telephone: string;
  password: string;
  address: string;
  roles: Role[];
  state: string;
  city: string;
  country: string;
  //pets : PetComponent[];

  constructor(public rest: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.getProducts();
  }
  /*
    getProducts() {
      this.users = [];
      this.rest.getProducts().subscribe((data: {}) => {
        console.log(data);
        this.users = data;
      });
    }
  */
  add() {
    this.router.navigate(['/user-add']);
  }
  /*
    delete(id) {
      this.rest.deleteProduct(id)
        .subscribe(res => {
            this.getProducts();
          }, (err) => {
            console.log(err);
          }
        );
    }*/
}
