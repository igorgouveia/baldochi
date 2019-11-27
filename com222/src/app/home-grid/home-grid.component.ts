import { Component, OnInit } from '@angular/core';
import {AppHomeComponent} from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.css']
})
export class HomeGridComponent implements OnInit {
  listBooks:any;
  constructor(
   private home:AppHomeComponent,
   private bookApiService: BooksApiService,
  ) { }

  ngOnInit(): void {
    this.getListBooks()
  }

  getListBooks() {
    this.bookApiService.getBookRandom()
      .then((books) => {
        this.listBooks = books;
        console.log(this.listBooks);
      }).catch((error) => {
        console.log({ error });
      });
  }

  viewProduct(ISBN: number){
   this.home.viewProduct(ISBN);
  }
}
