import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }

  // Subscriptions
  sub1:Subscription;
  sub2:Subscription;

  // Messages
  mess1;


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


  ngOnInit(): void {
    // Ex-1
    let obs1 = interval(1000);
    this.sub1 = obs1.pipe(
      map( data => "Video"+data) // transform the data before subscribe
    )
    .subscribe(res => {
      // console.log(res)
      this.mess1 = res;
    })

    setTimeout(()=>{
      this.sub1.unsubscribe();
    },5000);

    // Ex-2
    this.Users.pipe(
      map(data => data.name)
    )
    .subscribe(res => {
      // console.log(res);
      this.__globalService.print(res,"mess2")
    });

    
  }

}
