import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';
import { SidebarComponent } from 'src/admin/container/sidebar/sidebar.component';
import { UsersComponent } from 'src/admin/container/users/users.component';
import { ProductsTableComponent } from 'src/admin/container/products-table/products-table.component';
import { OrdersTableComponent } from 'src/admin/container/orders-table/orders-table.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from 'src/admin/container/dashboard/dashboard.component';
import { CategoriesComponent } from 'src/admin/container/categories/categories.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"register",
    component:SignUpComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"products",
    component:ProductsComponent,
  },
  {
    path:"products/:id",
    component:DescriptionComponent,
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"orders",
    component:OrdersComponent
  },
  {   
    path: 'admin', 
    component: SidebarComponent,
        children :[
           {
            path:"dashboard",
            component:DashboardComponent
           },
           {
            path:"users",
            component:UsersComponent
           },
           {
            path:"products",
            component:ProductsTableComponent
           },
           {
            path:"orders",
            component:OrdersTableComponent
           },
           {
            path:"categories",
            component:CategoriesComponent
           }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
