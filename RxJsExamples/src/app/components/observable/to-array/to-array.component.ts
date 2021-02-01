import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  users: any = [
    { name: "Pradeep Suthar", age: 22 },
    { name: "Mahendra Suthar", age: 28 },
    { name: "Vishal Suthar", age: 20 }
  ]

  sourceSubscription: Subscription;
  ngOnInit(): void {
    // Ex-1
    const source = interval(1000);
    this.sourceSubscription = source.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      console.log(res);
    });


    // Ex-2
    from(this.users).pipe(toArray()).subscribe(res => { console.log(res) });

    // Ex-3
    of("Pradeep", "Mahendra", "Vishal").pipe(toArray()).subscribe(res => console.log(res));

  }

}
