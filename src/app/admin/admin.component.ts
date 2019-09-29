import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  user(){
    this.router.navigate(['app-admin-user']);
  }

  pet(){
    this.router.navigate(['app-admin-pet']);
  }

  Breed() {
    this.router.navigate(['app-admin-Breed']);
  }

  specie() {
    this.router.navigate(['app-admin-specie']);
  }
}
