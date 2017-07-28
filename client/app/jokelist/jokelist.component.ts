import { HostBinding, Directive, Renderer2, ElementRef, HostListener, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke} from '../shared/joke';
import { Person } from '../person';
import { Student} from '../person';

//
// interface BatteryManager {
//   charging: boolean;
//   chargingTime: number;
//   dischargingTime: number;
//   level: number;
//   onchargingchnge: () => any;
//   onchargingtimechange: () => any;
//   ondischargingtime: () => any;
//   onlevelchange: () => any;
// }
//
// interface Navigator  {
//   battery: BatteryManager;
//   mozBattery: BatteryManager;
//   webkitBattery: BatteryManager;
// }

@Directive ({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private isHovering: boolean;
  @Input('appCardHover') config = {
    querySelector: '.card-text'
  };
  constructor (private el: ElementRef,
               private render: Renderer2) {
    render.setStyle(el.nativeElement, 'background-color', 'light-gray');
  }
  @HostListener('mouseover') onMouseOver() {
    const part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.render.setStyle(part, 'display', 'block');
    this.isHovering = true;
  }
  @HostListener('mouseout') onMouseOut() {
      const part = this.el.nativeElement.querySelector(this.config.querySelector);
      this.render.setStyle(part, 'display', 'none');
      this.isHovering = false;
  }
}
// @Directive({
//   selector: 'img[ccRollover]'
// })
// class RolloverImageDirective {
//   @Input('ccRollover') config = {
//     initial: 'https://unsplash.it/200/300?image=201',
//     over: 'https://unsplash.it/200/300?image=201'
//   };
//
//   @HostBinding('src') private imagePath: string;
//
//   @HostListener('mouseover') onMouseOver() {
//     this.imagePath = this.config.over;
//   }
//
//   @HostListener('mouseout') onMouseOut() {
//     this.imagePath = this.config.initial;
//   }
// }
@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.scss']
})
export class JokelistComponent implements OnInit {
  jokes: Joke[];
  me;
  stud;
  // battery = (<any>Navigator).battery || (<any>Navigator).mozBattery || (<any>Navigator).webkitBattery;
  // charge;

  constructor() {
    // this.charge = Math.floor(battery.level * 100) + '%';
    // console.log(this.charge + 'poolioppoiii');
    this.me = new Person('Scott', 'May');
    console.log(this.me.whoAreYou());
    this.stud = new Student('Scott', 'May', 'Angular4');
    console.log(this.stud.whoAreYou());
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello-Me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke('A kid threw a lump of cheddar at me', 'I thought it was not mature'),
    ];
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  ngOnInit() {
  };

  deleteJoke(joke) {
    const indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }
//   over(): any {
//     console.log('OBVTEFGYJBKJ')
// }
}
