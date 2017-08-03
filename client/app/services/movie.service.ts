import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http"

@Injectable()
export class MovieService {
headers;
  constructor(private http: Http) { }
  movieQuote(): any {
    // console.log(x);
    this.headers = new Headers();
    this.headers.append('X-Mashape-Key', '701eYoJ3agmsh1qcTbLZTyzCmPSnp1lvuadjsnaTVBM2UBLIRL');
    this.headers.append('Accept', 'application/json');
    console.log('pool');
    return this.http.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10',  {headers: this.headers})
      .map(res => {
        console.log(res + 'poo');
        return res.json();
      });
  }
}
