import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  user1VideoList = [
    "HTML 1",
    "HTML 2",
    "HTML 3",
  ];
  user2VideoList = [];
  user3VideoList = [];

  // Subscribe
  subscribed2:boolean = false;
  subscribed3:boolean = false;

  // Subscriptions
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.__globalService.videoEmit.subscribe(res => {
      this.user1VideoList.push(res);
    });
  }

  // Add video
  onAddVideo(video){
    this.__globalService.videoEmit.next(video.value);
  }

  // User2 Subscribe
  subscribedUser2(){
    if (this.subscribed2){
      this.subscription2.unsubscribe();
    }else{
      this.subscription2 = this.__globalService.videoEmit.subscribe(res => {
        this.user2VideoList.push(res);
      });
    }
    this.subscribed2 = !this.subscribed2;
  }
  
  // User3 Subscribe
  subscribedUser3(){
    if (this.subscribed3){
      this.subscription3.unsubscribe();
    }else{
      this.subscription3 = this.__globalService.videoEmit.subscribe(res => {
        this.user3VideoList.push(res);
      });
    }
    this.subscribed3 = !this.subscribed3;
  }
  
}
