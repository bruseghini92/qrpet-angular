import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Input() productData = { prod_name: '', prod_desc: '', prod_price: 0 };

  constructor(public rest: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.rest.addProduct(this.productData).subscribe((result) => {
      this.router.navigate(['/product-details/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}