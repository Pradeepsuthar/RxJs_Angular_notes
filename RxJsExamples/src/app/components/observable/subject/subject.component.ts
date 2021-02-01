import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy{

  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.__globalService.important.next(true);
  }
  
  ngOnDestroy(){
    this.__globalService.important.next(false);
  }
}
