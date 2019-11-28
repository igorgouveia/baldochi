import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-grid-category',
  templateUrl: './grid-category.component.html',
  styleUrls: ['./grid-category.component.css']
})
export class GridCategoryComponent implements OnInit {
  @Input() categoryId;
  listBooks:any;
  categorie:any;
  constructor(
   private home:AppHomeComponent,
   private bookApiService: BooksApiService,
  ) { }

  ngOnInit(): void {
    this.getListBooks()
    this.getCategorie();
  }

  getListBooks() {
    this.bookApiService.getBooksCategories(this.categoryId)
      .then((books) => {
        this.listBooks = books;
        console.log(this.listBooks);
      }).catch((error) => {
        console.log({ error });
      });
  }

  getCategorie() {
    this.bookApiService.getCategorie(this.categoryId)
      .then((categorie) => {
        this.categorie = categorie;
        console.log(this.categorie);
      }).catch((error) => {
        console.log({ error });
      });
  }

  viewProduct(ISBN: number){
   this.home.viewProduct(ISBN);
  }
}