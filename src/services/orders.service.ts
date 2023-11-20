import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = "https://capstone-backend-production-e275.up.railway.app/orders";
  constructor(private http:HttpClient) { 
    
  }
  getAllOrders(){
    return this.http.get<any>(this.apiUrl);
  }

  getOrderById(orderId:string){
    return this.http.get<any>(`${this.apiUrl}/order/${orderId}`)
  }

  getOrdersByUserId(userId:string){
    return this.http.get<any>(`${this.apiUrl}/${userId}`)
  }

  addOrder(order:any){
    return this.http.post<any>(`${this.apiUrl}/create`,order,{responseType:"json"});
  }

  updateProduct(order:any){
    return this.http.put(`${this.apiUrl}/update`,order,{responseType:"json"});
  }

}
