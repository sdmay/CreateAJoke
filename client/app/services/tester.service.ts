import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http'

@Injectable()
export class TesterService {
headers;
mainUrl = 'https://troyhunt-have-i-been-pwned.p.mashape.com/v2/breachedaccount/';

  constructor(private http: Http) { }
  checkEmail(name: HTMLInputElement): any {
    this.headers = new Headers();
    this.headers.append('X-Mashape-Key', 'GltQgdmkoWmsh1QeVjUzKWDTDSbvp1TTPmgjsndIP0FtiwNdiy');
    this.headers.append('Accept', 'application/json');
    return this.http.get(this.mainUrl + name.value, {headers: this.headers})
      .map(res => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('This request has failed ' + res.status);
        }
         if (res.status === 200) {}
         console.log('yes');
        // console.log(res.status + 'sdkjvnskjvnjs');
        if (res.status === 404) {
          console.log('error');
          return false;
        }
        console.log(res.json());
        // name.value = '';
        return res.json();
      });
  }
}
