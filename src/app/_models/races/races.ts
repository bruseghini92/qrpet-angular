import { OnInit } from '@angular/core';

import { SpecieComponent } from '../species/species';

export class RaceComponent implements OnInit {

    id : string;
    name : string;
    specie : SpecieComponent;
  
    constructor() { }
  
    ngOnInit() {
      
    }
  
  }
  