import { Directive, ElementRef, Renderer2, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { Joke} from './shared/joke';
import { JokeformComponent } from './jokeform/jokeform.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { ArticlesComponent } from './articles/articles.component';
import { CardHoverDirective } from './jokelist/jokelist.component';
import { ObserveComponent } from './observe/observe.component';
import { AsyncComponent } from './async/async.component';
import { BatteryComponent } from './battery/battery.component';
import { GeneticComponent } from './genetic/genetic.component';
import {HealthService} from './services/health.service';
import { FormComponent } from './form/form.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { BioComponent } from './speaker/bio/bio.component';
import { SpeakersListComponent } from './speaker/speakers-list/speakers-list.component';
import {SpeakerService} from './shared/speaker.service';
import { PeopleComponent } from './people/people.component';
import {PeepService} from './services/peep.service'
import {SortingPipe} from "./shared/sorting.pipe";
import {SwitchService} from "./services/switch.service";
import {MovieService} from "./services/movie.service";
import { TesterComponent } from './tester/tester.component';
import {TesterService} from "./services/tester.service"

@NgModule({
  declarations: [
    AppComponent,
    JokelistComponent,
    JokeformComponent,
    NgSwitchComponent,
    NgstyleComponent,
    ArticlesComponent,
    CardHoverDirective,
    ObserveComponent,
    AsyncComponent,
    BatteryComponent,
    GeneticComponent,
    FormComponent,
    SpeakerComponent,
    BioComponent,
    SpeakersListComponent,
    PeopleComponent,
    TesterComponent
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
    HealthService,
    SpeakerService,
    PeepService,
    SortingPipe,
    SwitchService,
    MovieService,
    TesterService

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
