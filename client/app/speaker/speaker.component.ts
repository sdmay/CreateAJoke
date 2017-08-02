import { Component, OnInit } from '@angular/core';
import {SpeakerService} from '../shared/speaker.service';
@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
  providers: [SpeakerService]
})
export class SpeakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
