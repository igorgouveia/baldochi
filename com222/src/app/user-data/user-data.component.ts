import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';
export interface user {
  fname: string;
  lname: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  @Input() user;
  userData: Array<user>;
  orderID;
  custID;
  fname;
  lname;
  email;
  street;
  city;
  state;
  zip;
  public listCategories;
  constructor(private home: AppHomeComponent,
    private bookApiService: BooksApiService, ) { }

  ngOnInit(): void {
    if (this.user[0]) {
      this.custID = this.user[0].custID;
      this.fname = this.user[0].fname;
      this.lname = this.user[0].lname;
      this.email = this.user[0].email;
      this.street = this.user[0].street;
      this.city = this.user[0].city;
      this.state = this.user[0].state;
      this.zip = this.user[0].zip;
    }
  }

  getListCategories() {
    this.bookApiService.getCategories()
      .then((categories) => {
        this.listCategories = categories;
        console.log(this.listCategories);
      }).catch((error) => {
        console.log({ error });
      });
  }

  finishOrder() {
    let json = {
      'fname': this.fname,
      'lname': this.lname,
      'email': this.email,
      'street': this.street,
      'city': this.city,
      'state': this.state,
      'zip': this.zip
    }
    if (this.user[0]) {
      this.home.custID = this.user[0].custID;
      this.bookApiService.updateUser(json, this.user[0].custID).then((user) => {
        this.addOrder(this.custID);
      });
    } else {
      this.bookApiService.createUser(json).then((user) => {
        this.bookApiService.verifyUser(this.email)
          .then((user) => {
            this.home.custID = user[0].custID;
            this.custID = user[0].custID;
            this.addOrder(this.custID);
          }).catch((error) => {
            console.log({ error });
          });
      });
    }
 
  }
  addOrder(custID) {
    this.bookApiService.createOrder(custID).then((user) => {
      this.bookApiService.getOrder(custID)
      .then((order) => {
        this.orderID = order[0].orderID;
        this.addOrderItems(this.orderID);
      }).catch((error) => {
        console.log({ error });
      });
    });
  }
  addOrderItems(orderID) {
    
    for(let o of this.home.shoppingBook){
      let json = {
        'orderID': orderID,
        'ISBN':o.ISBN,
        'qty': o.qty,
        'price': o.totalPrice
      }
      this.bookApiService.createOrderItem(json).then((user) => {
      });
    }
    this.home.goHistory(this.custID);
  }
}
