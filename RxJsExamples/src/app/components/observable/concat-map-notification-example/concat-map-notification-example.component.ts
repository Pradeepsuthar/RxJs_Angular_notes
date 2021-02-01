import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-concat-map-notification-example',
  templateUrl: './concat-map-notification-example.component.html',
  styleUrls: ['./concat-map-notification-example.component.scss']
})
export class ConcatMapNotificationExampleComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }

  notifyData = from([
    {
      img: "https://i.ytimg.com/vi/_uQrJ0TkZlc/default.jpg",
      title: "Notification 1",
      desc: "Cras sit amet nibh libero...",
      time: "1 sec ago"
    },
    {
      img: "https://i.ytimg.com/vi/rfscVS0vtbw/default.jpg",
      title: "Notification 2",
      desc: "Cras sit amet nibh libero...",
      time: "2 sec ago"
    },
    {
      img: "https://i.ytimg.com/vi/ITcv82TXS9o/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD77wwHSD8l8lMSPWyRfKZIyYc9VQ",
      title: "Notification 3",
      desc: "Cras sit amet nibh libero...",
      time: "3 sec ago"
    },
    {
      img: "https://i.ytimg.com/vi/WGJJIrtnfpk/default.jpg",
      title: "Notification 4",
      desc: "Cras sit amet nibh libero...",
      time: "4 sec ago"
    },
  ]);

  getNotification(data) {
    return of(`<div class="media">
          <img src="${data.img}"
              class="mr-2" alt="..." width="120px">
          <div class="media-body">
              <h5 class="my-0 py-0">${data.title}</h5>
              <p class="my-0 py-0">${data.desc}</p>
              <small class="my-0 py-0 time">${data.time}</small>
          </div>
        </div>`).pipe(delay(2000));
  }

  ngOnInit(): void {
    this.notifyData.pipe(
      concatMap(data => this.getNotification(data))
    )
      .subscribe(res => {
        this.__globalService.notifications(res, "notoficationsContainer");
      });

  }


}
