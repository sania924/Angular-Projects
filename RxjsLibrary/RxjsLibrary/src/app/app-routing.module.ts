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
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TakeComponent } from './observable/take/take.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { Comp3Component } from './comps/comp3/comp3.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';
import { CombinelatestComponent } from './observable/combinelatest/combinelatest.component';
import { TapComponent } from './observable/tap/tap.component';
import { SwitchmapSearchexampleComponent } from './observable/switchmap-searchexample/switchmap-searchexample.component';

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
      { path: 'custom-observable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'take', component: TakeComponent },
      { path: 'deboucetime', component: DebouncetimeComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'mergemap', component: MergemapComponent },
      { path: 'concatmap', component: ConcatmapComponent },
      { path: 'switchmap', component: ConcatmapComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'comp1', component: Comp1Component },
      { path: 'comp2', component: Comp2Component },
      { path: 'comp3', component: Comp3Component },
      { path: 'replaysubject', component: ReplaysubjectComponent },
      { path: 'asyncsubject', component: AsyncsubjectComponent },
      { path: 'combinelatest', component: CombinelatestComponent },
      { path: 'tap', component: TapComponent },
      {
        path: 'switchmap-searchexample',
        component: SwitchmapSearchexampleComponent,
      },
    ],
  },

  { path: '**', component: PromiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
