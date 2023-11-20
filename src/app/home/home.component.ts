import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  category=[
    "laptop","mobile","tablet","smartWatch","earPods"
  ]
  constructor(private router:Router){

  }
  
}
