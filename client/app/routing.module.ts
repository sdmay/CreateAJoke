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

const routes: Routes = [
  { path: '', redirectTo: 'joke', pathMatch: 'full' },
  { path: 'joke', component: JokelistComponent },
  { path: 'switch', component: NgSwitchComponent},
  { path: 'style', component: NgstyleComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'observe', component: ObserveComponent},
  { path: 'async', component: AsyncComponent },
  { path: 'bat', component: BatteryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
