import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }

  status;

  ngOnInit(): void {

    const obs1 = Observable.create(observable => {
      setTimeout(()=>{
        observable.next("Angular");
      },1000);
      setTimeout(()=>{
        observable.next("React js");
      },2000);
      setTimeout(()=>{
        observable.next("RxJs");
        // observable.error(new Error("Limit Exceed")); // if error is accour than observable stop
      },3000);
      setTimeout(()=>{
        observable.next("JavaScript");
      },4000);
      setTimeout(()=>{
        observable.next("TypeScript");
        observable.complete();
      },5000);
    })

    obs1.subscribe(res=>{
      // console.log(res)
      this.__globalService.print(res,"course")
    },
    (error)=>{
      this.status = "error";
    },
    ()=>{
      this.status = "completed";
    }  
    );

  }

}
