import { OnInit, Component } from '@angular/core';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpecieComponent implements OnInit {

  id: string;
  name: string;

  public constructor() {
    
    }

  ngOnInit() {

  }

}
