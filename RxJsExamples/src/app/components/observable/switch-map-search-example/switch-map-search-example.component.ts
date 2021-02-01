import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { Search } from 'src/app/modals/search';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-switch-map-search-example',
  templateUrl: './switch-map-search-example.component.html',
  styleUrls: ['./switch-map-search-example.component.scss']
})
export class SwitchMapSearchExampleComponent implements OnInit, AfterViewInit {

  @ViewChild('searchForm') searchForm: NgForm;
  searchResults: Search;
  searchResultsCount: number;

  constructor(
    private __globalService: GlobalService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    const formValue = this.searchForm.valueChanges;

    formValue.pipe(
      // map(data => data.searchTerm),
      filter(() => this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(data => {
        return this.__globalService.getYoutubeVideos(data)
      })
    ).subscribe(res => {
      this.searchResults = res['items'];
      this.searchResultsCount = Object.keys(res['items']).length;
    })
  }

}
