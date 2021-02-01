import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, switchAll, switchMap, delay } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {

    const source = from(["Tech","Comedy","News"]); // Array to Observable
    
    // Ex-1 | Map
    source.pipe(
      map(data => this.getData(data))
    )
    .subscribe(res => {
      this.__globalService.print(res, "elContainer1");
    });
    
    // Ex-2 | Map + switchAll
    source.pipe(
      map(data => this.getData(data)),
      switchAll()
    )
    .subscribe(res => {
      this.__globalService.print(res, "elContainer2");
    });
    
    // Ex-3 | switchMap = Map + switchAll
    source.pipe(
      switchMap(data => this.getData(data))
    )
    .subscribe(res => {
      this.__globalService.print(res, "elContainer3");
    });


  }

  getData(data){
    return of(data+" Video Upload").pipe(delay(2000)); // return observable data
  }

}
