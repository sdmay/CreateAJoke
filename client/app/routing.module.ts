import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { JokelistComponent} from './jokelist/jokelist.component';
import {NgstyleComponent} from './ngstyle/ngstyle.component';
import {ArticlesComponent} from './articles/articles.component';
import {ObserveComponent} from './observe/observe.component'
import {AsyncComponent} from './async/async.component';
import {BatteryComponent} from './battery/battery.component';
import {GeneticComponent} from './genetic/genetic.component';
import {FormComponent} from './form/form.component';
import {BioComponent} from './speaker/bio/bio.component';
import {SpeakersListComponent} from './speaker/speakers-list/speakers-list.component';
import { SpeakerComponent} from './speaker/speaker.component';
import {PeopleComponent} from "./people/people.component";
import {TesterComponent} from "./tester/tester.component"

const routes: Routes = [
  { path: '', redirectTo: 'joke', pathMatch: 'full' },
  { path: 'joke', component: JokelistComponent },
  { path: 'switch', component: NgSwitchComponent},
  { path: 'style', component: NgstyleComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'pipes', component: ObserveComponent},
  { path: 'async', component: AsyncComponent },
  { path: 'bat', component: BatteryComponent },
  {path: 'gen', component: GeneticComponent},
  {path: 'form', component: FormComponent},
  { path: 'speakers', component: SpeakerComponent, children: [
    { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
    { path: ':id', component: BioComponent, outlet: 'bio' }
  ] },
  {path: 'people', component: PeopleComponent},
  {path: 'movie', component: GeneticComponent},
  {path: 'tester', component: TesterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
