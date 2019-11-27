import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductImageModalComponent } from '../product-image-modal/product-image-modal.component';
import { AppHomeComponent } from '../app-home/app-home.component';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(public dialog: MatDialog, private home: AppHomeComponent) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductImageModalComponent, {
			width: '750px',
			panelClass: '',
			hasBackdrop: true,
			disableClose: true,
      data: {img: 'https://baldochi.unifei.edu.br/COM222/trabfinal/imagens/0131428985.01.THUMBZZZ.jpg'}
		});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
  }
  viewBooks(autorId){
    this.home.goBookAutor(autorId);
  }
}
