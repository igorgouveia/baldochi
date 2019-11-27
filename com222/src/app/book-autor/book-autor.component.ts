import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-book-autor',
  templateUrl: './book-autor.component.html',
  styleUrls: ['./book-autor.component.css']
})
export class BookAutorComponent implements OnInit {
  @Input() autorId;
  listBooks:any;
  author: any;
  constructor(
    private home: AppHomeComponent,
    private bookApiService: BooksApiService,
  ) { }

  ngOnInit(): void {
    this.getAuthor();
    this.getListBooks()
  }

  getListBooks() {
    this.bookApiService.getBookAuthor(this.autorId)
      .then((books) => {
        this.listBooks = books;
        console.log(this.listBooks);
      }).catch((error) => {
        console.log({ error });
      });
  }

  getAuthor() {
    this.bookApiService.getAuthor(this.autorId)
      .then((author) => {
        this.author = author;
        console.log(this.author);
      }).catch((error) => {
        console.log({ error });
      });
  }

  viewProduct(ISBN: number) {
    this.home.viewProduct(ISBN);
  }
}
