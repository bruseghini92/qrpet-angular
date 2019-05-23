import { Component, OnInit } from '@angular/core';
import { Role } from '../role/role';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  id: string;
  name: string;
  lastName: string;
  email: string;
  username: string;
  telephone: string;
  password: string;
  address: string;
  roles: Role[];
  state: string;
  city: string;
  country: string;

  constructor(public rest: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
}
