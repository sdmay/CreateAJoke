import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeepService {
a;
  constructor(private http: Http) {
    // this.getPeeps().subscribe(data => this.a === data);
  }
getPeeps(): any {
    return this.http.get('./assets/people.json')
      .map((res: any) => {
      // console.log(res.json());
      return res.json();
      });
}

}
