import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  dell = {
    brandname: "Dell",
    price: 59000,
    availabe: true
  };
  hp = {
    brandname: "HP",
    price: 45000,
    availabe: true
  };
  acer = {
    brandname: "Acer",
    price: 38000,
    availabe: false
  };
  notAvailable = {
    err: "Product not available",
    status: 404
  }

  data: any = "";
  apidata: any = "";


  posts:any = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

  constructor() { }

  ngOnInit(): void {

  }

  getData() {
    let promise = new Promise((resolve, reject) => {
      if (true) {
        return setTimeout(() => {
          var laptops: any = [
            this.dell,
            this.hp,
            this.acer,
          ]
          resolve(laptops);
        }, 3000);
      } else {
        if (this.notAvailable.status === 404) {
          reject(this.notAvailable.err);
        }
      }
    });
    this.data = "<div class='spinner-border role='status><span class='sr-only>Loading...</span></div>";
    promise.then((res) => {
      this.data = JSON.stringify(res);
    }).catch((res) => {
      this.data = JSON.stringify(res);
    });
    
    // api
    this.apidata = "<div class='spinner-border role='status><span class='sr-only>Loading...</span></div>";
    this.posts.then(res => {
      return setTimeout(()=>{
        this.apidata = JSON.stringify(res);
      },3000)
    })



  }

}
