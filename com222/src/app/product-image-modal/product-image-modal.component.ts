import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  img: string;
}
@Component({
  selector: 'app-product-image-modal',
  templateUrl: './product-image-modal.component.html',
  styleUrls: ['./product-image-modal.component.css']
})
export class ProductImageModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {
      console.log(this.data.img);
    }
    
  closeDialog(): void {
    this.dialogRef.close();
  }

}
