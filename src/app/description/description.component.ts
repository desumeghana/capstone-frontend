import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  productId:string=""
  product:Product|any;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductsService){
    this.activatedRoute.params.subscribe(params=>{
      this.productId=params['productId'];
    })
    this.productService.getProductById(this.productId).subscribe(response=>{
      this.product=response;
    })
  }
}
