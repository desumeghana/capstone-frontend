import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiUrl = "https://capstone-backend-production-e275.up.railway.app/products";
  constructor(private http: HttpClient) { }
  getAllProducts(){
    return this.http.get<Product>(this.apiUrl);
  }

  getProductsByCategory(category:string){
    return this.http.get<Product>(`${this.apiUrl}/category/${category}`)
  }

  getProductById(id:string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  addProduct(product:any){
    return this.http.post(`${this.apiUrl}/create`,product,{responseType:"json"});
  }


  searchProducts(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?q=${query}`);
  }

  updateProduct(product:Product){
    return this.http.put(`${this.apiUrl}/update`,product,{responseType:"json"});
  }

  
}
