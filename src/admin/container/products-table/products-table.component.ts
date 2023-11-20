import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/models/product';
import { ProductsService } from 'src/services/products.service';
import { ProductUpdateDialogComponent } from '../product-update-dialog/product-update-dialog.component';
import { ProductAddDialogComponent } from '../product-add-dialog/product-add-dialog.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  products:Product|any=[];
  currProduct:Product|any;
  constructor(private productService: ProductsService, private dialog:MatDialog){
    this.productService.getAllProducts().subscribe(
      response => {
        this.products = response;
      }
    );
  }

  addProduct(){
    const dialogRef1=this.dialog.open(ProductAddDialogComponent,{
      width:'60%',
      height:'60%'
    });
  }

  update(product:Product){
    const dialogRef2 = this.dialog.open(ProductUpdateDialogComponent, {
      width: '50%',
      height:'80%',
      data:product
    });  
  }

  updateAvailabilityStatus(e:any,productId:string){
   if(e.checked==false){
    this.productService.getProductById(productId).subscribe(response=>{
      this.currProduct=response;
      this.currProduct.available=0;
      this.productService.updateProduct(this.currProduct).subscribe();
    })
   }
   else{
      this.productService.getProductById(productId).subscribe(response=>{
      this.currProduct=response;
      this.currProduct.available=1;
      this.productService.updateProduct(this.currProduct).subscribe();
    })
   }
  }
}
