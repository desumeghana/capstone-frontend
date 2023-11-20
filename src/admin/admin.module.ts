import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { UsersComponent } from './container/users/users.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { OrdersTableComponent } from './container/orders-table/orders-table.component';
import { ProductsTableComponent } from './container/products-table/products-table.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { ProductUpdateDialogComponent } from './container/product-update-dialog/product-update-dialog.component';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './container/categories/categories.component';
import { ProductAddDialogComponent } from './container/product-add-dialog/product-add-dialog.component';



@NgModule({
  declarations: [
    SidebarComponent,
    UsersComponent,
    OrdersTableComponent,
    ProductsTableComponent,
    DashboardComponent,
    ProductUpdateDialogComponent,
    CategoriesComponent,
    ProductAddDialogComponent,
    
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
