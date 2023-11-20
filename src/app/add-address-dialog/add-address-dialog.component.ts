import { Component,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrdersService } from 'src/services/orders.service';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';

@Component({
  selector: 'app-add-address-dialog',
  templateUrl: './add-address-dialog.component.html',
  styleUrls: ['./add-address-dialog.component.css']
})
export class AddAddressDialogComponent {
  formData: any;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddAddressDialogComponent>, public dialog: MatDialog,public ordersService:OrdersService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formData = this.fb.group({
      'Address': ['',[Validators.required]],
      'Mobile':['',Validators.required]
    })
  }
  add(){
    const temp={
      userId:this.data.userId,
      products:this.data.products,
      price:this.data.price,
      address:this.formData.value.Address,
      mobileNo:this.formData.value.Mobile,
      orderStatus:"confirmed"
    }
    this.ordersService.addOrder(temp).subscribe(response=>{})
    const dialogRef = this.dialog.open(OrderConfirmationComponent, {
      width: '50%',
      height:'50%',
      data: {}
    });
   
  }
}
