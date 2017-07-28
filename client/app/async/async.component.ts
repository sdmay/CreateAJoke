import { Component, OnInit, OnDestroy } from '@angular/core';
import {reject} from 'q';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit, OnDestroy {
  promise: Promise<string>;
  asyncObserve: Observable<number>;
  observableData: number;
  subscription;
// promiseData: string;
  constructor() {
    // this.getPromise().then(x => this.promiseData = x)
    this.promise = this.getPromise();
    console.log(this.promise)
    this.asyncObserve = this.runObserve();
    console.log(this.asyncObserve)
  }

  ngOnInit() {
    this.getPromise();
    this.subscribeObservable();
  }
getPromise(): any {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise Complete!'), 3000);
    });
    }
    getObservable(): any {
    return Observable
      .interval(1000)
      .take(30)
      .map((v) =>  v);
    }
    subscribeObservable(): any {
    this.subscription = this.getObservable()
      .subscribe( v => this.observableData = v)
    }
    ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log(this.subscription);
    }
    }
    runObserve(): any {
    return Observable
      .interval(1000)
      .map((v) => v)
    }
}

