import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

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
    
    // Ex-2 | Map + ConcatAll
    source.pipe(
      map(data => this.getData(data)),
      concatAll()
    )
    .subscribe(res => {
      this.__globalService.print(res, "elContainer2");
    });
    
    // Ex-3 | ConcatMap = Map + ConcatAll
    source.pipe(
      concatMap(data => this.getData(data))
    )
    .subscribe(res => {
      this.__globalService.print(res, "elContainer3");
    });


  }

  getData(data){
    return of(data+" Video Upload").pipe(delay(2000)); // return observable data
  }

}
