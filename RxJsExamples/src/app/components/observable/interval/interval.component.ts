import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }

  subscribeVideo: Subscription;
  video;

  ngOnInit(): void {
    const brodCardVideo = interval(1000);
    // const brodCardVideo = timer(5000,1000); // start after 5 sec

    this.subscribeVideo = brodCardVideo.subscribe((res)=>{
      this.video = "Video-"+res;
      this.__globalService.print(this.video, "videos")
      console.log(this.video)
      if (res >= 5){
        this.subscribeVideo.unsubscribe()
      }
    });
  }

}
