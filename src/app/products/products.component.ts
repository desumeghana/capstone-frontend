import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/models/product';
import { User } from 'src/models/user';
import { ProductsService } from 'src/services/products.service';
import { UsersService } from 'src/services/users.service';
interface Cart {
  productId: string,
  quantity: number
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
 
  category = [
    "laptop", "mobile", "tablet", "smartWatch", "earPods"
  ]
  products: Product | any = [];
  userData: any;
  cart: Cart[] | any = [];
  formData:any
  constructor(private productService: ProductsService, private userService: UsersService,private router:Router,private fb:FormBuilder) {
    this.productService.getAllProducts().subscribe(
      response => {
        this.products = response;
      }
    );
    this.formData = this.fb.group({
      'SearchValue': [''],
    })
  }

  
  // ngOnInit(){
  //   this.productService.eventFromHomeComponentValue.subscribe(value=>{
  //    this.productService.getProductsByCategory(value).subscribe(
  //     response=>{
  //       this.products=response;
  //     });    
  //   })
  // }
  
  selectCategory(category: string) {
    this.productService.getProductsByCategory(category).subscribe(response => {
      this.products = response;
    });
  }

  addToCart(productId: string) {
    if (localStorage.getItem('userId')?.length === 0) {
      alert("login to add to cart");
    }
    else {
      this.userData = localStorage.getItem('userData')
      this.userData = JSON.parse(this.userData);
      const temp: Cart = {
        productId: productId,
        quantity: 1
      }
      if (this.userData.cart === null) {
        this.userData.cart=[];
        this.userData.cart.push(temp);
        alert("product has been added successfully");
        localStorage.setItem('userData', JSON.stringify(this.userData));
      }
      else if (this.userData.cart != null) {
        let idx = this.userData.cart.findIndex((obj: { productId: string; }) => obj.productId == productId);
        if (idx == -1) {
          this.userData.cart.push(temp);
          alert("product has been added successfully");
          localStorage.setItem('userData', JSON.stringify(this.userData));
        }
        else {
          this.userData.cart[idx].quantity++;
          let quantity = this.userData.cart[idx].quantity;
          alert(`${quantity} products added successfully`)
          console.log(this.userData.cart);
          localStorage.setItem('userData', JSON.stringify(this.userData));
        }
      }
    }
    this.userService.updateUser(this.userData).subscribe(response=>{
      //console.log(response);
    });
  }

  buy(productId:string){
    console.log("get")
    this.addToCart(productId);
    this.router.navigate(['/cart']);
  }

  view(productId:string){
    this.router.navigate([`/products/${productId}`])
  }

  search(){
    this.productService.searchProducts(this.formData.value.SearchValue).subscribe(response=>{
      //console.log(response);
      this.products=response;
    })
  }
}
