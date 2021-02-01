import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addVideoBtn') addVideoBtn:ElementRef; 

  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    let count=1;
    fromEvent(this.addVideoBtn.nativeElement, 'click').subscribe((res) => {
      this.__globalService.print(count++,"videos")
    })
  }

  


}
