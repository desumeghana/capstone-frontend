import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  constructor( public dialogRef: MatDialogRef<OrderConfirmationComponent>){

  }
  close(){
    this.dialogRef.close();
  }
}
