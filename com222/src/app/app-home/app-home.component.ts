import { Component, OnInit } from '@angular/core';
import { GridSearchComponent } from '../grid-search/grid-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})

export class AppHomeComponent implements OnInit {
 homeGrid = false;
 productDetail = false;
 gridSearch = false;
 gridCategory = false;
 searchPass = '';
 categoryId = 0;
  constructor() { }

  ngOnInit() {
    this.homeGrid = true;
  }

  viewProduct(){
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.productDetail = true;
  }

  searchProduct(searchPass:string){    
    this.searchPass = searchPass
    this.productDetail = false;
    this.homeGrid = false;
    this.gridCategory = false;
    this.gridSearch = true;
  }

  searchCategory(categoryId: number){    
    this.categoryId = categoryId
    this.productDetail = false;
    this.homeGrid = false;
    this.gridCategory = true;
    this.gridSearch = false;
  }

}
