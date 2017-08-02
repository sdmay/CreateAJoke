import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpeakerService} from '../../shared/speaker.service';
import {Speaker} from '../../shared/speaker';
@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
currentSpeaker: Speaker;
  constructor(
    private route: ActivatedRoute,
    private speakerService: SpeakerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      console.log(params)
      this.currentSpeaker = this.speakerService.getSpeakerByID(params.id);
    });
  }

}
