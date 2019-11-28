import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchPass = "";
  public listCategories;
  constructor(private home: AppHomeComponent,
              private bookApiService: BooksApiService, ) { }

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

  goShoppingCart() {
    this.home.goShoppingCart();
  }
  goHistory() {
    this.home.goHistory();
  }

  searchProduct() {
    this.home.searchProduct(this.searchPass);
  }

  searchCategory(categoryId: number) {
    this.home.searchCategory(categoryId);
  }

}
