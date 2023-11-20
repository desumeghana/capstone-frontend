import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/models/product';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-update-dialog',
  templateUrl: './product-update-dialog.component.html',
  styleUrls: ['./product-update-dialog.component.css']
})
export class ProductUpdateDialogComponent implements OnInit {
  formData: any;
  constructor(@Inject(MAT_DIALOG_DATA) public product:Product,private fb: FormBuilder,private productService:ProductsService,private dialogRef:MatDialogRef<ProductUpdateDialogComponent> ){
  }

  ngOnInit(): void {
    this.formData = this.fb.group({
      'title':[`${this.product.title}`,[Validators.required]],
      'category': [`${this.product.category}`,[Validators.required]],
      'price': [`${this.product.price}`,[Validators.required]],
      'description': [`${this.product.description}`,[Validators.required]],
      'discount': [`${this.product.discount}`,[Validators.required]],
      'quantity': [`${this.product.quantity}`,[Validators.required]]
    })
  }
  
  updateProduct(){
    this.product.title=this.formData.value.title;
    this.product.category=this.formData.value.category;
    this.product.price=this.formData.value.price;
    this.product.description=this.formData.value.description;
    this.product.discount=this.formData.value.discount;
    this.product.quantity=this.formData.value.quantity;
    this.productService.updateProduct(this.product).subscribe(response=>{});
    this.dialogRef.close();
  }

}
