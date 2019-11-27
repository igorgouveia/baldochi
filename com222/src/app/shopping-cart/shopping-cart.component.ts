import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  searchPass = "";
  public listCategories;
  constructor(private home: AppHomeComponent,
              private bookApiService: BooksApiService, ) { }

  constructor() { }

  ngOnInit(): void {
    this.getListCategories()
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

  goHome() {
    this.home.goHome();
  }

  goConfirm() {
    this.home.goConfirm();
  }
}
