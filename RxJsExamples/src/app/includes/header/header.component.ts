import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  important:boolean = false;

  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.__globalService.important.subscribe( (res) => {
      this.important = res;
    });
  }

}
