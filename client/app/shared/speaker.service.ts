import { Injectable } from '@angular/core';
import {Speaker} from './speaker';

@Injectable()
export class SpeakerService {
  private speakers: Speaker[] =
    [{
      'id': 1,
      'pool': 3
    },
      {
        'id': 2,
        'pool': 2
      },
      {
        'id': 3,
        'pool': 6
      },
      {
        'id': 4,
        'pool': 5
      },
      {
        'id': 5,
        'pool': 1
      },
      {
        'id': 6,
        'pool': 1
      }];
  constructor() { }
getSpeakers(): any {
    return this.speakers;
}
getSpeakerByID(id) {
    return this.speakers.find(speaker => speaker.id === Number(id))
}
}
