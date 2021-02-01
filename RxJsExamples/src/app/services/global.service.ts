import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Search } from '../modals/search';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  important = new Subject<boolean>();

  // Replay-Subject
  videoEmit = new ReplaySubject<string>(3);

  constructor(
    private http: HttpClient
  ) { }

  print(vid, eleId) {
    let li = document.createElement('li');
    li.innerText = vid;
    document.getElementById(eleId).appendChild(li);
  }
  
  notifications(notify, notiContainerId) {
    let li = document.createElement('div');
    li.setAttribute('class',"card p-2");
    li.setAttribute('data-aos',"fade-down");
    li.setAttribute('data-aos-duration',"500");
    li.innerHTML = notify;
    document.getElementById(notiContainerId).prepend(li);
  }

  getPostAPI():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  
  getYoutubeVideos(searchTerm):Observable<Search>{
    const allYouTubeDataUrl = "http://192.168.43.57:8080";
    // const allYouTubeDataUrl = "http://127.0.0.1:7860/youtube";
    // const UxtrendzUrl = "https://my-json-server.typicode.com/Uxtrendz/apis/videoList";
    return this.http.get<Search>(allYouTubeDataUrl+'/video?search='+searchTerm);
  }

}
