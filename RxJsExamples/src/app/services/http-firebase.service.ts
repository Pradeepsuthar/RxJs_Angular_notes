import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class HttpFirebaseService {


  constructor(
    private http: HttpClient
  ) { }

  // Products
  productsUrl: string = "https://pradeepbhardwaj-5c9aa.firebaseio.com/products.json";
  getProducts() {
    return this.http.get(this.productsUrl);
  }
  saveProducts(productData: any[]) {
    return this.http.put(this.productsUrl, { products: productData });
  }
  
  // Users
  UsersUrl: string = "https://pradeepbhardwaj-5c9aa.firebaseio.com/users.json";
  getUsers() {
    return this.http.get<User>(this.UsersUrl);
  }
  addNewUser(userData):Observable<User>{
    return this.http.post<User>(this.UsersUrl, userData);
  }
  updateUser(uid:string,data:User){
    return this.http.put("https://pradeepbhardwaj-5c9aa.firebaseio.com/users/"+ uid +".json", data);
  }
  deleteUser(uid:string){
    return this.http.delete("https://pradeepbhardwaj-5c9aa.firebaseio.com/users/"+ uid +".json");
  }


}
