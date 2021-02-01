import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RxJs';

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
