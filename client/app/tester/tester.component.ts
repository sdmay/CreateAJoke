import { Component, OnInit } from '@angular/core';
import {TesterService} from '../services/tester.service';
@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {
x: {};
  b;
error: {

  statusText: string;
};
wrong: boolean;
xer: boolean;
  constructor(private service: TesterService) { }

  ngOnInit() {
  }
  emailCheck(name: HTMLInputElement): any {
    if (name.value === '') {
      return false;
    }
     this.service.checkEmail(name).subscribe(
       (res) => {
         console.log(name.value);
         this.b = name.value;
         this.x = res;
         this.xer = true;
         this.wrong = false;
         name.value = '';
       },
       (error) => {
         this.b = name.value;
         console.log(this.b);
         this.wrong = true;
         this.xer = false;
         name.value = '';
         this.handleError(error)
       })
  }
  handleError(error): any {
    console.log(error);
    this.xer = false;
    this.error = error;
    this.wrong = true;
  }
}
