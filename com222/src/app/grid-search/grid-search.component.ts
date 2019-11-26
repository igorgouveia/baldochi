import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-grid-search',
  templateUrl: './grid-search.component.html',
  styleUrls: ['./grid-search.component.css']
})
export class GridSearchComponent implements OnInit {
  @Input() searchPass;
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
