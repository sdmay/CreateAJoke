import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke} from '../shared/joke';
import { Person } from '../person';
import { Student} from '../person';
@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.scss']
})
export class JokelistComponent implements OnInit {
  jokes: Joke[];
me;
stud;
  constructor() {
    this. me = new Person('Scott', 'May');
    console.log(this.me.whoAreYou());
    this.stud = new Student ('Scott', 'May', 'Angular4');
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
}
