import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'

@Injectable()
export class SwitchService {
headers;
l;
main = 'https://mashape-community-foaas.p.mashape.com/';
donut = 'donut/';
everything = 'everything/';
  constructor(private z: Http) { }


  goFuck(): any {
    this.headers = new Headers();
    this.headers.append('X-Mashape-Key', 'M0MkgPlpsEmshiPBmLfjxeZngMKsp1bnkBBjsnwhNRwY0ReG2c');
    this.headers.append('Accept', 'application/json');
    return this.z.get('https://mashape-community-foaas.p.mashape.com/off/Tom/Scott', {headers: this.headers})
      .map(res => {
        return res.json();
      });
  }

  fuckThat(): any {
    this.headers = new Headers();
    this.headers.append('X-Mashape-Key', 'M0MkgPlpsEmshiPBmLfjxeZngMKsp1bnkBBjsnwhNRwY0ReG2c');
    this.headers.append('Accept', 'application/json');
    return this.z.get('https://mashape-community-foaas.p.mashape.com/that/Scott', {headers: this.headers})
      .map(res => {
        return res.json();
      });
  }
  fuckDonut(x, y): any {
    console.log(y);
    this.headers = new Headers();
    this.headers.append('X-Mashape-Key', 'M0MkgPlpsEmshiPBmLfjxeZngMKsp1bnkBBjsnwhNRwY0ReG2c');
    this.headers.append('Accept', 'application/json');
    return this.z.get(this.main + this.donut + x + '/' + y ,  {headers: this.headers})
      .map(res => {
        return res.json();
      });
  }
  fuckEverything(x): any {
       console.log(x);
      this.headers = new Headers();
      this.headers.append('X-Mashape-Key', 'M0MkgPlpsEmshiPBmLfjxeZngMKsp1bnkBBjsnwhNRwY0ReG2c');
      this.headers.append('Accept', 'application/json');
      return this.z.get(this.main + this.everything + x ,  {headers: this.headers})
        .map(res => {
          return res.json();
        });
  }
}
// M0MkgPlpsEmshiPBmLfjxeZngMKsp1bnkBBjsnwhNRwY0ReG2c
