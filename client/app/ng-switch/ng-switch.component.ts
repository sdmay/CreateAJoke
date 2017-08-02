import { Component, OnInit} from '@angular/core';
import {SwitchService} from '../services/switch.service';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  fuck: {
    message: string;
    subtitle: string;
  };
  that: {
    message: string;
    subtitle: string;
  };
  isOpen: boolean;
  isOpenThat: boolean;
  donut: boolean;
  donny: {
    message: string;
    subtitle: string;
  }
  everything: {
    message: string;
    subtitle: string;
}
everythingOpen: boolean;
  people: any[] = [{
    "name": "Douglas  Pace",
    "age": 35, "country": 'MARS'
  },
    {"name": "Mcleod  Mueller", "age": 32, "country": 'USA'},
    {"name": "Day  Meyers", "age": 21, "country": 'HK'},
    {"name": "Aguirre  Ellis", "age": 34, "country": 'UK'},
    {"name": "Cook  Tyson", "age": 32, "country": 'USA'}
  ];
  constructor(private s: SwitchService) {
  }




  ngOnInit() {
    // this.getOff();
    // this.getThat();

  }
getOff(): any {
    // console.log('get')
  this.everythingOpen = false;
    this.isOpen = true;
  this.isOpenThat = false;
  this.donut = false;
    return this.s.goFuck().subscribe((res) => {
      // console.log(res);
      this.fuck = res;
      // console.log(this.fuck);
    })

}
  getThat(): any {
    this.everythingOpen = false;
      this.isOpenThat = true;
    this.isOpen = false;
    this.donut = false;
    // console.log('get')
    return this.s.fuckThat().subscribe((res) => {
      // console.log(res);
      this.that = res;
      console.log(this.isOpen);


    })

  }
  getDonut(name: HTMLInputElement, enemy: HTMLInputElement): any {
    console.log(name);
    console.log('here');
    if (name.value === '' || enemy.value === '') {
      alert('Come on put someone down!');
      name.value = '';
      enemy.value = '';
      return false;
    }
    this.everythingOpen = false;
      this.isOpen = false;
      this.isOpenThat = false;
      this.donut = true;
      return this.s.fuckDonut(name.value, enemy.value).subscribe((res) => {
        this.donny = res;
        name.value = '';
        enemy.value = '';
      })
  }
  getEverything(x: HTMLInputElement): any {
    console.log(x.value)
    if (x.value === '') {
      return false;
    }
    this.isOpen = false;
    this.isOpenThat = false;
    this.donut = false;
    this.everythingOpen = true;
    return this.s.fuckEverything(x.value).subscribe((res) => {
      this.everything = res;
      console.log(this.everything);
     x.value = ''
    })

  }


}
