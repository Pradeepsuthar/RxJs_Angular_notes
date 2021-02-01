import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { from } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { HttpFirebaseService } from '../../services/http-firebase.service'
import { User } from '../../modals/user';

@Component({
  selector: 'app-http-firebase',
  templateUrl: './http-firebase.component.html',
  styleUrls: ['./http-firebase.component.scss']
})
export class HttpFirebaseComponent implements OnInit {


  product: object = {};
  products: any = [];
  fetching: boolean = false;
  editProductIndex: number;

  constructor(
    private __productService: HttpFirebaseService,
    private __userService: HttpFirebaseService,
    private loader: LoadingBarService
  ) { }

  ngOnInit(): void {
    this.fetchAllProducts();
    this.getAllUsers();
  }

  // Delete product
  onDeleteProduct(prodId) {
    if (confirm("Do you want delete this product?")) {
      this.products.splice(prodId, 1);
      this.onSaveProducts();
    }
  }

  // Add New Product
  onAddProduct(form: NgForm) {
    this.loader.start();
    let data = Object.assign({}, form.value);
    this.product = {
      prodId: data['prodId'],
      prodName: data['prodName'],
      prodPrice: data['prodPrice']
    };
    if (this.editMode) {
      this.products[this.editProductIndex] = this.product;
      this.editMode = false;
    } else {
      this.products.push(this.product);
    }
    this.loader.stop();
    this.product = {
      prodId: '',
      prodName: '',
      prodPrice: ''
    };
  }

  // Save all products
  onSaveProducts() {
    this.loader.start();
    console.log("Save all products")
    this.__productService.saveProducts(this.products).subscribe(
      (res) => { console.log(res) },
      (err) => { console.log(err) }
    )
    this.loader.stop();
  }

  // fetch  All Products
  fetchAllProducts() {
    this.fetching = true;
    this.__productService.getProducts().pipe(
      pluck('products'),
    ).subscribe(
      (res) => {
        this.products = res;
        this.fetching = false;
      },
      (err) => { console.log(err) }
    );
  }

  // Edit Product
  editMode: boolean = false;
  editProduct(i: number) {
    this.editMode = true;
    this.product = this.products[i];
    this.editProductIndex = (i);
  }



  // ///////////////////////////////////////////////For User form
  @ViewChild('userForm') userForm: NgForm;

  usersList: any[] = [];
  editUserId:string;

  onAddUser(userData: User) {
    if(this.userEditMode){
      this.loader.start();
      this.__userService.updateUser(this.editUserId, userData).subscribe(
        () => {
          this.getAllUsers();
          this.loader.stop();
        }
        )
        this.userEditMode=false;
      }else{
        this.loader.start();
        this.usersList.push(userData);
        this.__userService.addNewUser(userData).subscribe(
          (res) => {
            this.getAllUsers();
            this.loader.stop();
          },
          (err) => console.log(err),
          );
        }
      }

  getAllUsers() {
    this.loader.start();
    const userArray = [];
    this.__userService.getUsers()
      .pipe(map(data => {
        for (const key in data) {
          if (data.hasOwnProperty) {
            userArray.push({ uid: key, ...data[key] });
          }
        }
        return userArray;
      }))
      .subscribe(res => {
        this.usersList = res;
      })
    this.loader.stop();
  }

  removeUser(uid) {
    this.loader.start();
    if (confirm("Do you want delete this product?")) {
      this.__userService.deleteUser(uid).subscribe(() => { this.getAllUsers() })
    }
    this.loader.stop();
  }

  userEditMode:boolean=false;
  editUser(uid, i) {
    this.userEditMode=true;
    this.userForm.setValue(
      {
        name: this.usersList[i]['name'],
        mobile: this.usersList[i]['mobile']
      }
    );
    this.editUserId = uid;
  }

}
