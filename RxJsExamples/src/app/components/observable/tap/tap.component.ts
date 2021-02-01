import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }


  sourceSubscription: Subscription;
  arr:any = ["Pradeep","Mahendra","Vishal","Kanu","Jp","Raj","Kinal","Chetna","Kajal"];

  ngOnInit(): void {
    let source = interval(1000);
    this.sourceSubscription = source.pipe(
      tap(res => {
        if (res>this.arr.length-1){
          this.sourceSubscription.unsubscribe();
        }
      }
      ),
      map(data => this.arr[data])
      )
      .subscribe(res => {
        console.log(res);
        this.__globalService.print(res, 'userData') 
    });

  }

}
