import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-grid-search',
  templateUrl: './grid-search.component.html',
  styleUrls: ['./grid-search.component.css']
})
export class GridSearchComponent implements OnInit {
  @Input() searchPass;
  listBooks: any;
  constructor(
    private home: AppHomeComponent,
    private bookApiService: BooksApiService,
  ) { }

  ngOnInit(): void {
    this.getListBooks()
  }

  getListBooks() {
    this.bookApiService.getBooks()
      .then((books) => {
        this.listBooks = books;
        this.listBooks = Object.assign([], this.listBooks).filter(
          item => item.title.toLowerCase().indexOf(this.searchPass.toLowerCase()) > -1 || item.ISBN.toLowerCase().indexOf(this.searchPass.toLowerCase()) > -1
        )
      }).catch((error) => {
        console.log({ error });
      });
    
  }

  viewProduct(ISBN: number) {
    this.home.viewProduct(ISBN);
  }


}
