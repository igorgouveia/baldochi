import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  email = "";
  user = null;
  public listCategories;

  constructor(private home: AppHomeComponent,
    private bookApiService: BooksApiService) { }

  ngOnInit(): void {
  }

  verifyUser() {
    this.bookApiService.verifyUser(this.email)
      .then((user) => {
        this.user = user;
        this.home.goUserData(this.user);
      }).catch((error) => {
        console.log({ error });
      });
  }

  verifyEmail() {
    this.verifyUser();
  }

}
