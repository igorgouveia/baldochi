import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-book-autor',
  templateUrl: './book-autor.component.html',
  styleUrls: ['./book-autor.component.css']
})
export class BookAutorComponent implements OnInit {
  @Input() autorId;
  tiles: Tile[] = [
    { text: 'fdsfdsfdsfsdfsd', cols: 1, rows: 4, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 4, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 4, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 4, color: '#DDBDF1' },
    { text: 'One', cols: 1, rows: 4, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 4, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 4, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 4, color: '#DDBDF1' },
  ];
  constructor(
    private home: AppHomeComponent
  ) { }

  ngOnInit() {
  }

  viewProduct() {
    this.home.viewProduct();
  }
}
