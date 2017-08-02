import { Component, OnInit, ViewChild } from '@angular/core';
import * as Rx from 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.scss']
})
export class ObserveComponent implements OnInit {
  // @ViewChild('fed') button;
  // clicker;
dateVal = new Date();

jsonVal = {
  moo: 'foo', goo: { too: 'new'}
};

  constructor() {
  }

  ngOnInit() {
    // console.log(this.jsonVal)

    // console.log(this.fb())
  }

  }

  // getClicks() {
  //   const clicks = Rx.Observable.fromEvent(this.button, 'click');
  //   const result = clicks.debounceTime(1000);
  //   result.subscribe(x => {
  //     this.clicker = x;
  //     console.log(this.clicker.detail);
  //   });
  //
  // }

