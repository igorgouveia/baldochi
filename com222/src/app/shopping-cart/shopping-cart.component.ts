import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingBook = [];
  totalCart = 0;
  searchPass = "";
  public listCategories;
  constructor(private home: AppHomeComponent,
    private bookApiService: BooksApiService, ) { }
  ngOnInit(): void {
    this.shoppingBook = this.home.shoppingBook;
    this.totalCart = this.home.totalCart;
  }


  goHome() {
    this.home.goHome();
  }

  goConfirm() {
    this.home.goConfirm();
  }
}
