import { Component, OnInit } from '@angular/core';
import { from, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }

  arr = ["Pradeep", "Vishal", "Mahendra", "Kanu", "Jp", "Raj", "Kajal", "Chetna"];

  ngOnInit(): void {

    // Ex-1
    from(this.arr).pipe(
      take(3)
    )
    .subscribe(res=>{
      // console.log(res);
      this.__globalService.print(res,"elContainer1");
    });


    // Ex-2
    from(this.arr).pipe(
      takeLast(5)
    )
    .subscribe(res=>{
      // console.log(res);
      this.__globalService.print(res,"elContainer2");
    });
    
    
    // Ex-3
    const sourceInterval = interval(1000);
    const condition= timer(5000);
    sourceInterval.pipe(
      map(data => this.arr[data]),
      takeUntil(condition),
      )
      .subscribe(res => {
        console.log(res);
        this.__globalService.print(res,"elContainer3");
    });


  }

}
