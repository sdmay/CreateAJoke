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
  yo;
  z = 'AIzaSyBuvbhmIR1SMnfdHEJ0Kqd_nT4XZEwN4yA';
  a = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
b= this.a + this.z;
d = 'http://freegeoip.net/json/';
c;
p;
results;
weather = 'http://samples.openweathermap.org/data/2.5/weather?q=London';
w;
  constructor(private http: Http) {
  }

  ngOnInit() {
    console.log(this.d);
    console.log(this.loc);
    this.location(this.loc);
    this.googleLocate();
    this.getWeather();
  }

  location(loc): any {
    this.loc.getCurrentPosition(x => this.yo = x);
  }
  googleLocate(): any {
    return this.http.get(this.d).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.results = data.json();
      console.log(this.results);
      this.p = this.results;
      console.log(this.p)
    });
  }
  getWeather() {
    return this.http.get(this.weather).subscribe(data =>{
      console.log(data);
      console.log('init')
      this.w = data;
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
