import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {
    const techChannel = interval(1000).pipe(map(video => "techChannel Video#"+(video+1)),take(5));
    const comedyChannel = interval(1000).pipe(map(video => "comedyChannel Video#"+(video+1)),take(3));
    const newsChannel = interval(1000).pipe(map(video => "newsChannel Video#"+(video+1)),take(4));
    
    const allChannels = concat(techChannel,comedyChannel,newsChannel);
    
    allChannels.subscribe(res => {
      this.__globalService.print(res,"myChannel") 
    });

  }

}
