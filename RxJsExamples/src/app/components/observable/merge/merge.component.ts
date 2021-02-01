import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  
  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {
    const techChannel = interval(3000).pipe(map(video => "techChannel Video#"+(video+1)),take(5));
    const comedyChannel = interval(5000).pipe(map(video => "comedyChannel Video#"+(video+1)),take(3));
    const newsChannel = interval(3500).pipe(map(video => "newsChannel Video#"+(video+1)),take(4));
    
    const allChannels = merge(techChannel,comedyChannel,newsChannel);
    
    allChannels.subscribe(res => {
      this.__globalService.print(res,"myChannel") 
    });

  }

}
