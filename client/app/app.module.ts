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
import { GeneticComponent } from './genetic/genetic.component'

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
    GeneticComponent
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
