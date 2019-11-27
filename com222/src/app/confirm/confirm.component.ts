import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
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
  
   goUserData() {
    this.home.goUserData();
  }

}
