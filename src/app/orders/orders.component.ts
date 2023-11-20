import { Component } from '@angular/core';
import { Order } from 'src/models/order';
import { OrdersService } from 'src/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  Orders:Order[]=[];
  currOrder:Order|any;
  userId:string|any;
  constructor(private orderService:OrdersService){
    this.userId=localStorage.getItem('userId');
    this.orderService.getOrdersByUserId(this.userId).subscribe(response=>{
      this.Orders=response;
    })
  }
  cancel(orderId:string){
    this.orderService.getOrderById(orderId).subscribe(response=>{
      this.currOrder=response;
      this.currOrder.orderStatus="Cancel Requested";
      this.orderService.updateProduct(this.currOrder).subscribe(response);
      window.location.reload();
    })
    
  }
}
