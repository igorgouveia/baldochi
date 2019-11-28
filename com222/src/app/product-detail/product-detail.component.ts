import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductImageModalComponent } from '../product-image-modal/product-image-modal.component';
import { AppHomeComponent } from '../app-home/app-home.component';
import { BooksApiService } from '../api/books-api.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  @Input() ISBN;
  constructor(public dialog: MatDialog, private home: AppHomeComponent, 
    private bookApiService: BooksApiService,) {
  }
  listBooks = null;
  openDialog(ISBN): void {
    const dialogRef = this.dialog.open(ProductImageModalComponent, {
			width: '750px',
			panelClass: '',
			hasBackdrop: true,
			disableClose: true,
      data: {img: `https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/${ISBN}.01.LZZZZZZZ.jpg`}
		});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit(): void {
    this.getListBooks(this.ISBN)
  }

  getListBooks(ISBN) {
    this.bookApiService.getBook(ISBN)
      .then((books) => {
        this.listBooks = books;
        console.log(this.listBooks);
      }).catch((error) => {
        console.log({ error });
      });
  }
  viewBooks(autorId){
    this.home.goBookAutor(autorId);
  }
  addCart(book){
    this.home.addCart(book);
  }
}
