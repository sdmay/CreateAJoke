import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as cors from 'cors';
import {MovieService} from "../services/movie.service"
@Component({
  selector: 'app-genetic',
  templateUrl: './genetic.component.html',
  styleUrls: ['./genetic.component.scss']
})
export class GeneticComponent implements OnInit {
  // 701eYoJ3agmsh1qcTbLZTyzCmPSnp1lvuadjsnaTVBM2UBLIRL
movie;
constructor(private http: Http,
            private m: MovieService) { }

  ngOnInit() {
  this.get();
  console.log('run')
  }
get(): any {
  return this.m.movieQuote().subscribe((res) => {
    console.log(res + 'here');
    console.log('Here');
    this.movie = res;
    console.log(this.movie)
  })
}
}
