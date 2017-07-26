import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { Joke} from './shared/joke';
import { JokeformComponent } from './jokeform/jokeform.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    JokelistComponent,
    JokeformComponent,
    NgSwitchComponent,
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
