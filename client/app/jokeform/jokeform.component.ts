import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Joke} from '../shared/joke';

@Component({
  selector: 'app-jokeform',
  templateUrl: './jokeform.component.html',
  styleUrls: ['./jokeform.component.scss']
})
export class JokeformComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();


  constructor() { }

  ngOnInit() {
  }
  createJoke(setup:  HTMLInputElement, punchline:  HTMLInputElement): any {
  if (setup.value === '' || punchline.value === '') {
    return false;
  }
    this.jokeCreated.emit(new Joke(setup.value, punchline.value));
    setup.value = '';
    punchline.value = '';
  }

}
