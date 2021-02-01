import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filter1;
  filter2;
  filter3;

  userData = [
    {id:1, name:"Pradeep", gender:'Male'},
    {id:2, name:"Kinal", gender:'Female'},
    {id:3, name:"Jp", gender:'Male'},
    {id:4, name:"Kanu", gender:'Male'},
    {id:5, name:"Kajal", gender:'Female'},
    {id:6, name:"Raj", gender:'Male'},
    {id:7, name:"Chetna", gender:'Female'},
    {id:8, name:"Pushkar", gender:'Male'},
  ]

  constructor() { }

  ngOnInit(): void {

    const arrToObs = from(this.userData);

    
    // Ex-1 Filter by length
    arrToObs.pipe(
      filter(data => data.name.length > 3),
      toArray()
    )
    .subscribe(res => {
      // console.log(res);
      this.filter1 = res;
    });


    // Ex-2 Filter by Gender
    arrToObs.pipe(
      filter(data => data.gender == 'Male'),
      toArray()
    )
    .subscribe(res => {
      // console.log(res);
      this.filter2 = res;
    });
    

    // Ex-3 Filter by nth item
    arrToObs.pipe(
      filter(data => data.id >= 5),
      toArray()
    )
    .subscribe(res => {
      // console.log(res);
      this.filter3 = res;
    });


  }

}
