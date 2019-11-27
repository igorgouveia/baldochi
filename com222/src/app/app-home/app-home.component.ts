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
 autor = false;
 aboutUs = false;
 bookAutor = false;
 searchPass = '';
 categoryId = 0;
 autorId = 0;
 ISBN = null;
  constructor() { }

  ngOnInit() {
    this.homeGrid = true;
  }

  viewProduct(ISBN: number){
    this.ISBN = ISBN;
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = true;
  }

  searchProduct(searchPass:string){    
    this.searchPass = searchPass
    this.productDetail = false;
    this.homeGrid = false;
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.gridSearch = true;
  }

  searchCategory(categoryId: number){    
    this.categoryId = categoryId
    this.productDetail = false;
    this.homeGrid = false;
    this.gridCategory = true;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.gridSearch = false;
  }

  goHome(){
    this.homeGrid = true;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = false;
  }

  goAutor(){
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = true; 
    this.aboutUs = false;
    this.bookAutor = false;
    this.productDetail = false;
  }

  goBookAutor(autorId : number){
    this.autorId = autorId;
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = false;
    this.bookAutor = true;
    this.productDetail = false;
  }

  goAboutUs(){
    this.homeGrid = false;
    this.gridSearch = false; 
    this.gridCategory = false;
    this.autor = false; 
    this.aboutUs = true;
    this.bookAutor = false;
    this.productDetail = false;
  }

}
