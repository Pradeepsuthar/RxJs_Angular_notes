import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('searchItem') searchItem:ElementRef;
  @ViewChild('searchItem2') searchItem2:ElementRef;

  constructor(
    private loader: LoadingBarService
  ) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    // Ex-1
    fromEvent<any>(this.searchItem.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
      )
      .subscribe( (res) => {
        this.loader.start()
        console.log(res);
        this.loader.stop()
      });
      
    // Ex-2
    fromEvent<any>(this.searchItem2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged() // hold perviouse request
      )
      .subscribe( (res) => {
        this.loader.start()
        console.log(res);
        this.loader.stop()
    });




  }

}
