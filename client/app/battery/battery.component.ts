import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit {

  loc = navigator.geolocation;
  host = location.host;
  platform = navigator.platform;
  product = navigator.product;
  // con = navigator.connection;
  yo;
  z = 'AIzaSyBuvbhmIR1SMnfdHEJ0Kqd_nT4XZEwN4yA';
  a = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
b= this.a + this.z;
d = 'http://freegeoip.net/json/';
c;
p;
results;
weather = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9cd30a7407eff78fc8377ef08f5b6ffd';
w;
first = 'http://api.openweathermap.org/data/2.5/weather?q=';
app = '&APPID=9cd30a7407eff78fc8377ef08f5b6ffd';
  constructor(private http: Http) {
  }

  ngOnInit() {
    this.location(this.loc);
    this.googleLocate();

  }

  location(loc): any {
    this.loc.getCurrentPosition(x => this.yo = x);
  }
  googleLocate(): any {
    return this.http.get(this.d).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data.json();
      this.p = this.results;
      this.getWeather(this.p.city);
    });
  }
  getWeather(city) {
    return this.http.get(this.first + city + this.app).subscribe(data => {
      console.log(data.json());
      this.w = data.json();
    })
  }

}
// getComments() : Observable<Comment[]>{
//   // ...using get request
//   return this.http.get(this.commentsUrl)
//   // ...and calling .json() on the response to return data
//     .map((res:Response) => res.json())
//     //...errors if any
//     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
//
// }
