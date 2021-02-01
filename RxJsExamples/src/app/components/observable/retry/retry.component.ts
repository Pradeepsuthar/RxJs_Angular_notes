import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  postData:any;
  fatching:boolean = false;
  status:string = "No Post available";
  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {}
  
  getData(){
    this.fatching = true;
    this.status = "Fatching...";
    this.__globalService.getPostAPI().pipe(
      // retry(4)
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if (retryCount > 5){
            throw err;
          }else {
            retryCount = retryCount+1;
            console.log(retryCount);
            return retryCount;
          }
        }, 0)
      ))
    )
    .subscribe(
      (res) => {
        // console.log(res);
        this.postData = res;
        this.status = "Post fatched successfully";
        this.fatching = false;
      }, (err) => {
        console.log(err);
        this.status = "Post fatching error";
        this.fatching = false;
    }
    );
  }

}
