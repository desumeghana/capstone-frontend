import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/models/product';
import { User } from 'src/models/user';
import { ProductsService } from 'src/services/products.service';
import { UsersService } from 'src/services/users.service';
import { AddAddressDialogComponent } from '../add-address-dialog/add-address-dialog.component';
interface Cart {
  productId: string,
  quantity: number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  product: Product | any;
  cart: Cart[] = [];
  userData: User | any;
  price:number=0;
  TotalPrice:number=0;
  shippingCharges:number=0;
  constructor(private productService: ProductsService, private userService: UsersService,
    private dialog:MatDialog) {
  }

  ngOnInit() {
    //getting the user data from local storage and retrieving the cart to display them in cart page
    this.userData = localStorage.getItem('userData')
    this.userData = JSON.parse(this.userData);
    if (this.userData.cart != null && this.userData.cart.length != 0) {
      
      this.cart = this.userData.cart;
      for (let i = 0; i < this.cart.length; i++) {
        this.productService.getProductById(this.cart[i].productId).subscribe(
          response => {
            this.shippingCharges=99;
            this.product = response;
            this.product.quantity = this.cart[i].quantity;
            this.products.push(this.product);
            this.price=this.price+this.product.quantity*this.product.price;
            this.TotalPrice=this.price+this.shippingCharges;
          });
      }
    }
  }


  addQuantity(productId: string) {
    //finding the index of product in cart and updating the quantity in local storage & database
    let idx = this.userData.cart.findIndex((obj: { productId: string; }) => obj.productId == productId);
    this.userData.cart[idx].quantity++;
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.userService.updateUser(this.userData).subscribe(response => { });
    window.location.reload();
  }

  subtractQuantity(productId: string) {
    let idx = this.userData.cart.findIndex((obj: { productId: string; }) => obj.productId == productId);
    if (this.userData.cart[idx].quantity === 1) {
      this.remove(productId);
    }
    else {
      this.userData.cart[idx].quantity--;
    }
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.userService.updateUser(this.userData).subscribe(response => { });
    window.location.reload()
  }

  remove(productId: string) {
    let idx = this.userData.cart.findIndex((obj: { productId: string; }) => obj.productId == productId);
    this.userData.cart.splice(idx, 1);
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.userService.updateUser(this.userData).subscribe(response => { });
    window.location.reload();
  }
  share(productId:string){
    
  }
  checkout(){
   // window.location.reload();
    const dialogRef = this.dialog.open(AddAddressDialogComponent, {
      width: '60%',
      height:'30%',
      data: {
        userId:this.userData.userId,
        products:this.userData.cart,
        price:this.TotalPrice
      }
    });  
    this.userData.cart=[];
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.userService.updateUser(this.userData).subscribe(response=>{});
  }

}
