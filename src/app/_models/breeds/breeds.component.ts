import { OnInit, Component } from '@angular/core';
import { SpecieComponent } from '../species/species.component';

@Component({
  selector: 'app-Breed',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedComponent implements OnInit {

    id : string;
    name : string;
    species : SpecieComponent;

    constructor(){

    }
  
    ngOnInit() {
      
    }
  
  }
  