import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchPass = "";
  constructor(private home: AppHomeComponent) { }
  ngOnInit(): void {
  }
  goHome() {
    this.home.goHome();
  }
  searchProduct() {
    this.home.searchProduct(this.searchPass);
  }
  searchCategory(categoryId: number) {
    this.home.searchCategory(categoryId);
  }

}
