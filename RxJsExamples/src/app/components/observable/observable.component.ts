import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(
    private loader: LoadingBarService
    ) { }
    
    ngOnInit(): void {
      this.loader.start();
      setTimeout(()=>{
        this.loader.stop();
      },3000)
    }

}
