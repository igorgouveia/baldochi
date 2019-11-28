import { Component, OnInit } from '@angular/core';
import { GridSearchComponent } from '../grid-search/grid-search.component';
export interface bookOrder {
  ISBN: string;
  title: string;
  price: number;
  qty: number;
  totalPrice: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})


export class AppHomeComponent implements OnInit {
 totalCart: number = 0;
 shoppingBook:Array<bookOrder>= []; 
 homeGrid = false;
 productDetail = false;
 gridSearch = false;
 gridCategory = false;
 autor = false;
 aboutUs = false;
 bookAutor = false;
 shoppingCart = false;
 confirm = false;
 userData = false;
 history = false;
 searchPass = '';
 categoryId = 0;
 autorId = 0;
 ISBN = null;
 user:any;
 custID;
  constructor() { }

  ngOnInit() {
    this.homeGrid = true;
  }

  viewProduct(ISBN: number){
    this.ISBN = ISBN;
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = true;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = false;
    this.history = false;
  }

  searchProduct(searchPass:string){    
    this.searchPass = searchPass
    this.productDetail = false;
    this.homeGrid = false;
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.gridSearch = true;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = false;
    this.history = false;
  }

  searchCategory(categoryId: number){    
    this.categoryId = categoryId
    this.productDetail = false;
    this.homeGrid = false;
    this.gridCategory = true;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.gridSearch = false;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = false;
    this.history = false;

  }

  goHome(){
    this.homeGrid = true;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = false;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = false;
    this.history = false;
  }

  goAutor(){
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = true; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = false;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = false;
    this.history = false;
  }

  goBookAutor(autorId : number){
    this.autorId = autorId;
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = true;
    this.productDetail = false;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = false;
    this.history = false;
  }

  goAboutUs(){
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = true;
    this.bookAutor = false;
    this.productDetail = false;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = false;
    this.history = false;
  }

  goShoppingCart(){
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = false;
    this.shoppingCart = true;
    this.confirm = false;
    this.userData = false;
    this.history = false;
  }

  goConfirm(){
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = false;
    this.shoppingCart = false;
    this.confirm = true;
    this.userData = false;
    this.history = false;
  }

  goUserData(user:any){
    this.user = user;
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = false;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = true;
    this.history = false;
  }

  goHistory(custID = this.custID){
    this.custID = custID;
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = false;
    this.shoppingCart = false;
    this.confirm = false;
    this.userData = false;
    this.history = true;
  }

  addCart(book:bookOrder){
    let shoppingAux = null;
    let aux;
    this.totalCart += book.price;
    shoppingAux = Object.assign([], this.shoppingBook).filter(
      item => item.ISBN.toLowerCase().indexOf(book.ISBN.toLowerCase()) > -1
    )
      console.log(shoppingAux);
    if(shoppingAux.length != 0){
      shoppingAux[0].qty += 1;
      shoppingAux[0].totalPrice +=  book.price
      aux = this.shoppingBook.findIndex(item => item.ISBN == shoppingAux[0].ISBN)
      this.shoppingBook[aux] = shoppingAux[0];
    }
    else{
      book.qty = 1;
      book.totalPrice = book.price;
      this.shoppingBook.push(book);
    }

    this.goShoppingCart();
  }

}
