import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-genetic',
  templateUrl: './genetic.component.html',
  styleUrls: ['./genetic.component.scss']
})
export class GeneticComponent implements OnInit {
muscleSearch = 'https://api.23andme.com/3/report/wellness.muscle_composition/';
m;


constructor(private http: Http) { }

  ngOnInit() {
  console.log('thisisin');
  console.log(this.muscleSearch);
  this.getMuscle();
  }
getMuscle(): any {
    return this.http.get(this.muscleSearch).subscribe(x => {
      console.log('init');
      console.log(x);
      this.m = x.json();
      console.log(this.m)
    })
}
}
