import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  Users = from([
    {id:1, name:"Pradeep"},
    {id:2, name:"Kinal"},
    {id:3, name:"Jp"},
    {id:4, name:"Kanu"},
    {id:5, name:"Kajal"},
    {id:6, name:"Raj"},
    {id:7, name:"Chetna"},
    {id:8, name:"Pushkar"},
  ]);
  userData;

  constructor() { }

  ngOnInit(): void {
    this.Users.pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.userData = res;
    });
    
  }

}
