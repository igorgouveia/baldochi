import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
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
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 4, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 4, color: '#DDBDF1'},
  ];
  constructor( private home: AppHomeComponent) { }

  ngOnInit() {
  }
  
  viewBooks(autorId){
    this.home.goBookAutor(autorId);
  }

}
