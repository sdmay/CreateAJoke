import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {Peeps} from '../shared/peeps';
import {PeepService} from '../services/peep.service';
// import {SortingPipe} from '../shared/sorting.pipe'
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
peeps: Peeps[];
pepe;
  constructor(private p: PeepService) { }

  ngOnInit() {
   this.p.getPeeps().subscribe(data =>  {
     // console.log(data)
      this.peeps = data;
     // console.log(this.peeps)
   });

  }


}
