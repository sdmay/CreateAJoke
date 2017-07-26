import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { JokelistComponent} from './jokelist/jokelist.component';


const routes: Routes = [
  { path: '', redirectTo: 'joke', pathMatch: 'full' },
  { path: 'joke', component: JokelistComponent },
  { path: 'switch', component: NgSwitchComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
