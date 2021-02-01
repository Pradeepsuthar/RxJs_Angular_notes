import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }

  Obs2Mes;

  ngOnInit(): void {
    // Ex-1 of()
    let Obs1 = of('Vijay','Shakher','Sharma');
    Obs1.subscribe( (res) => {
      // console.log(res)
      this.__globalService.print(res,'obs1');
    });
    // Ex-2 of()
    let Obs2 = of({fname:'Vijay',mname:'Shakher',lname:'Sharma'});
    Obs2.subscribe( (res) => {
      this.Obs2Mes = res;
      // console.log(this.Obs2Mes)
    });
    
    
    
    // Ex-1 from() with Array
    let Obs3 = from(['Vijay','Shakher','Sharma']);
    Obs3.subscribe( (res) => {
      // console.log(res)
      this.__globalService.print(res,'Arrobs');
    });
    // Ex-2 from() with Promise
    let promise = new Promise(resolve=>{
      return setTimeout((res)=>{
        resolve("Promise Resolve");
      }, 3000);
    });

    let Obs4 = from(promise);
    Obs4.subscribe( (res) => {
      // console.log(res)
      this.__globalService.print(res,'PromiseObs');
    });
    // Ex-3 from() with Array
    let Obs5 = from('Hello');
    Obs5.subscribe( (res) => {
      // console.log(res)
      this.__globalService.print(res,'strObs');
    });
    
  }
  
}
