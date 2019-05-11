import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RaceComponent implements OnInit {

    id : string;
    name : string;

    constructor(){

    }
  
    ngOnInit() {
      
    }
  
  }
  