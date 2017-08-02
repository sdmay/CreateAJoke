import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as cors from 'cors';

@Component({
  selector: 'app-genetic',
  templateUrl: './genetic.component.html',
  styleUrls: ['./genetic.component.scss']
})
export class GeneticComponent implements OnInit {
muscleSearch = 'https://api.23andme.com/3/report/wellness.muscle_composition/';
m;
headers;


constructor(private http: Http) { }

  ngOnInit() {

  }



}
