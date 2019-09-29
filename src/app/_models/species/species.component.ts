import { OnInit, Component } from '@angular/core';
import { Breed } from '../breeds/breeds';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpecieComponent implements OnInit {

  id: string;
  name: string;
  breeds: Breed[];

  public constructor() {
    
    }

  ngOnInit() {

  }

}
