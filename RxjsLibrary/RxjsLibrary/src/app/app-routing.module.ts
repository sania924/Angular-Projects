import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalTimerComponent } from './observable/interval-timer/interval-timer.component';
import { OfandfromComponent } from './observable/ofandfrom/ofandfrom.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval-timer', component: IntervalTimerComponent },
      { path: 'ofandfrom', component: OfandfromComponent },
      { path: 'to-array', component: ToArrayComponent },
    ],
  },

  { path: '**', component: PromiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
