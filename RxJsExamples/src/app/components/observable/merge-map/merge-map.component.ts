import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

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
    
    // Ex-2 | Map + MergeAll
    source.pipe(
      map(data => this.getData(data)),
      mergeAll()
    )
    .subscribe(res => {
      this.__globalService.print(res, "elContainer2");
    });
    
    // Ex-3 | MergeMap = Map + MergeAll
    source.pipe(
      mergeMap(data => this.getData(data))
    )
    .subscribe(res => {
      this.__globalService.print(res, "elContainer3");
    });


  }

  getData(data){
    return of(data+" Video Upload"); // return observable data
  }

}
