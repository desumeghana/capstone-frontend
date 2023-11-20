import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/models/product';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.css']
})
export class ProductAddDialogComponent {
  formData: any;
  currProduct:any;
  constructor(private fb: FormBuilder,private productService:ProductsService){
    this.currProduct={
      title:"",
      images:[""],
      category:"",
      price:0,
      description:"",
      discount:0,
      quantity:0,
      available:1
    }
    this.formData = this.fb.group({
      'title':['',[Validators.required]],
      'category': ['', [Validators.required]],
      'imageUrl': [''],
      'price': ['',[Validators.required]],
      'description': [''],
      'quantity': ['',[Validators.required]],
      'discount':[0]
    })
  }
  add(){
    this.currProduct.title=this.formData.value.title;
    this.currProduct.category=this.formData.value.category;
    this.currProduct.images[0]=this.formData.value.imageUrl;
    this.currProduct.price=this.formData.value.price;
    this.currProduct.description=this.formData.value.description;
    this.currProduct.quantity=this.formData.value.quantity;
    this.currProduct.discount=this.formData.value.discount;
    this.productService.addProduct(this.currProduct).subscribe(response=>console.log(response))
  }

}
