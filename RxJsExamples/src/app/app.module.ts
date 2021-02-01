import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { AllComponent } from './components/observable/all/all.component';
import { FormEventComponent } from './components/observable/form-event/form-event.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { ToArrayComponent } from './components/observable/to-array/to-array.component';
import { CustomObservableComponent } from './components/observable/custom-observable/custom-observable.component';
import { MapComponent } from './components/observable/map/map.component';
import { PluckComponent } from './components/observable/pluck/pluck.component';
import { FilterComponent } from './components/observable/filter/filter.component';
import { TapComponent } from './components/observable/tap/tap.component';
import { TakeComponent } from './components/observable/take/take.component';
import { RetryComponent } from './components/observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './components/observable/debounce-time/debounce-time.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './components/observable/subject/subject.component';
import { ReplaySubjectComponent } from './components/observable/replay-subject/replay-subject.component';
import { ConcatComponent } from './components/observable/concat/concat.component';
import { MergeComponent } from './components/observable/merge/merge.component';
import { MergeMapComponent } from './components/observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/observable/concat-map/concat-map.component';
import { ConcatMapNotificationExampleComponent } from './components/observable/concat-map-notification-example/concat-map-notification-example.component';
import { SwitchMapComponent } from './components/observable/switch-map/switch-map.component';
import { SwitchMapSearchExampleComponent } from './components/observable/switch-map-search-example/switch-map-search-example.component';
import { FormsModule } from '@angular/forms';
import { HttpFirebaseComponent } from './components/http-firebase/http-firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FormEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ConcatMapNotificationExampleComponent,
    SwitchMapComponent,
    SwitchMapSearchExampleComponent,
    HttpFirebaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
