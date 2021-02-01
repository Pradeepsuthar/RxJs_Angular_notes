import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './components/observable/all/all.component';
import { CustomObservableComponent } from './components/observable/custom-observable/custom-observable.component';
import { DebounceTimeComponent } from './components/observable/debounce-time/debounce-time.component';
import { FilterComponent } from './components/observable/filter/filter.component';
import { FormEventComponent } from './components/observable/form-event/form-event.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { MapComponent } from './components/observable/map/map.component';
import { ObservableComponent } from './components/observable/observable.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { PluckComponent } from './components/observable/pluck/pluck.component';
import { RetryComponent } from './components/observable/retry/retry.component';
import { TakeComponent } from './components/observable/take/take.component';
import { TapComponent } from './components/observable/tap/tap.component';
import { ToArrayComponent } from './components/observable/to-array/to-array.component';
import { PromiseComponent } from './components/promise/promise.component';
import { SubjectComponent } from './components/observable/subject/subject.component';
import { ReplaySubjectComponent } from './components/observable/replay-subject/replay-subject.component';
import { ConcatComponent } from './components/observable/concat/concat.component';
import { MergeComponent } from './components/observable/merge/merge.component';
import { MergeMapComponent } from './components/observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './components/observable/switch-map/switch-map.component';
import { ConcatMapNotificationExampleComponent } from './components/observable/concat-map-notification-example/concat-map-notification-example.component';
import { SwitchMapSearchExampleComponent } from './components/observable/switch-map-search-example/switch-map-search-example.component';
import { HttpFirebaseComponent } from './components/http-firebase/http-firebase.component';

const routes: Routes = [
  {path: 'promise', component:PromiseComponent},
  {path: 'observable', component:ObservableComponent, children:[
    {path: '', component:AllComponent},
    {path: 'form-event', component:FormEventComponent},
    {path: 'interval', component:IntervalComponent},
    {path: 'of-from', component:OfFromComponent},
    {path: 'toArray', component:ToArrayComponent},
    {path: 'custom-observable', component:CustomObservableComponent},
    {path: 'map', component:MapComponent},
    {path: 'pluck', component:PluckComponent},
    {path: 'filter', component:FilterComponent},
    {path: 'tap', component:TapComponent},
    {path: 'take', component:TakeComponent},
    {path: 'retry', component:RetryComponent},
    {path: 'debounce-time', component:DebounceTimeComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'replay-subject', component: ReplaySubjectComponent },
    {path: 'concat', component: ConcatComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'merge-map', component: MergeMapComponent},
    {path: 'concat-map', component: ConcatMapComponent},
    {path: 'switch-map', component: SwitchMapComponent},
  ]},
  {path: 'notifications', component: ConcatMapNotificationExampleComponent},
  {path: 'search', component: SwitchMapSearchExampleComponent},
  {path: 'http-crud', component: HttpFirebaseComponent},
  {path: '**', component:PromiseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
