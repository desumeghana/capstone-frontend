import { Component } from '@angular/core';
import { Order } from 'src/models/order';
import { Product } from 'src/models/product';
import { OrdersService } from 'src/services/orders.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent {

  Orders:Order[]=[];
  currOrder:Order|any;
  currProduct:Product|any;
  constructor(private orderService:OrdersService,private productService:ProductsService){
    this.orderService.getAllOrders().subscribe(response=>{
      this.Orders=response;
    })
  }
  
  //get order details and update the orderStatus to approve confirmation or cancellation & update inventory 
  Approve(orderId:string){
    this.orderService.getOrderById(orderId).subscribe(response=>{
      this.currOrder=response;
      if(this.currOrder.orderStatus=="Cancel Requested")
      {
        this.currOrder.orderStatus="cancelled";
      }
      else{
        //get each product id in the order and update the quantity of each product in the order products
       for(let i=0;i<this.currOrder.products.length;i++){
        this.productService.getProductById(this.currOrder.products[i].productId).subscribe(response=>{
          this.currProduct=response;
          this.currProduct.quantity-=this.currOrder.products[i].quantity;
          this.productService.updateProduct(this.currProduct).subscribe();
        })
       }
       this.currOrder.orderStatus="delivered";
      }
      this.orderService.updateProduct(this.currOrder).subscribe();
    })
  }

}
