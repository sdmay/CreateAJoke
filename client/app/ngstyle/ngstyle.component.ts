import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {
  people: any[] = [{
    "name": "Douglas  Pace","age": 35, "country": 'MARS'},
    {"name": "Mcleod  Mueller", "age": 32, "country": 'USA'},
    {"name": "Day  Meyers", "age": 21, "country": 'HK'},
    {"name": "Aguirre  Ellis", "age": 34, "country": 'UK'},
    {"name": "Cook  Tyson", "age": 32, "country": 'USA'}
  ];
  constructor() { }
  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
      case 'MARS':
        return 'pink';
    }
  }
  getStyleColor(country) {
    switch (country) {
      case 'UK':
        return 'pink';
      case 'USA':
        return 'yellow';
      case 'MARS':
        return 'green';
      case 'HK':
        return 'blue';
    }
  }
changeAgeFonstSize(country) {
    switch (country) {
      case 'USA':
        return 22;
      case 'HK':
        return 36;
      case 'UK':
        return 48;
      case 'MARS':
        return 10;
    }
}

addBoxShadow(country) {
    switch (country) {
      case 'USA':
        return `35 25 25 #888`;
      case 'MARS':
        return [33, 44, 6, '#88888']
    }
}

  ngOnInit() {
  }

}
