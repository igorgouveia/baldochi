import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  listAuthor: any;
  constructor( private home: AppHomeComponent,
              private bookApiService: BooksApiService,
    ) { }
  
    ngOnInit(): void {
      this.getAuthors();
    }  
    getAuthors() {
      this.bookApiService.getAuthors()
        .then((author) => {
          this.listAuthor = author;
          console.log(this.listAuthor);
        }).catch((error) => {
          console.log({ error });
        });
    }
  viewBooks(autorId){
    this.home.goBookAutor(autorId);
  }

}
