import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
@Input() custID;
order:any;
  public listCategories;
  constructor(private home: AppHomeComponent,
              private bookApiService: BooksApiService, ) { }

  ngOnInit(): void {
    this.bookApiService.getOrder(this.custID)
    .then((order) => {
      this.order = order;
    }
    );
  }


  

}
