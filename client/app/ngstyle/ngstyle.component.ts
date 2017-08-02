import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {
  clicker;
  cookie;
  fizzy;
  r = window.onresize;
  iW;
  oW;
  px = 90;
  hist;
  l = [];
  people: any[] = [{
    "name": "Douglas  Pace","age": 35, "country": 'MARS'},
    {"name": "Mcleod  Mueller", "age": 32, "country": 'USA'},
    {"name": "Day  Meyers", "age": 21, "country": 'HK'},
    {"name": "Aguirre  Ellis", "age": 34, "country": 'UK'},
    {"name": "Cook  Tyson", "age": 32, "country": 'USA'}
  ];
  constructor(private n: NgZone) {
    this.hist = window.history.length;
   console.log(this.hist);
   for (let i = 1; i <= this.hist; i++ ) {
     this.l.push(i);
   }
    window.onresize = (e) =>
    {
      // (window.outerWidth - window.innerWidth) > this.px
      n.run(() => {
        this.iW = window.innerWidth;
        this.oW = window.outerWidth;
        // console.log(this.iW);
        // console.log(this.oW + 'p');
        // console.log(this.r);
        // console.log(e)
        if ((this.oW - this.iW) < 600) {
          // alert('Why you messing with the window?');

              }
      })
    }
  }
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
    // this.wow();
    // this.cookie = cookies.getAll();
  }

// wow() {
//   for (let i = 1; i <= 100; i++) {
//     const f = i % 3 === 0, b = i % 5 === 0;
//     console.log(
//       f && b ? 'FizzBuzz'
//         : f ? 'Fizz'
//         : b ? 'Buzz'
//           : i
//     );
//   }
// }
  history(event: any): any {
console.log('click');
this.clicker = event.target.id;
console.log(this.clicker);
    window.history.go(-this.clicker);
    return false;
    // console.log('out');
  }

}
