import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Speaker} from '../../shared/speaker';
import {SpeakerService} from '../../shared/speaker.service';
@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakersListComponent implements OnInit {
speakers: Speaker[] = [];
  constructor(private router: Router,
              private speakerService: SpeakerService) { }

  ngOnInit() {
    this.speakers = this.speakerService.getSpeakers();
    console.log(this.speakers)
  }
  showBio(id) {
    console.log('click');
    this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
  }

}
