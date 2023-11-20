import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = "https://capstone-backend-production-e275.up.railway.app/users";
  private url = "https://capstone-backend-production-e275.up.railway.app/users/login";
  constructor(private http: HttpClient) {
  }
  getAllUsers() {
    return this.http.get<any>(this.apiUrl);
  }
  getUserById(userId:string){
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
  createUser(userData:any){
    return this.http.post(`${this.apiUrl}/create`,userData,{responseType:"json"});
  }
  updateUser(userData:any){
    return this.http.put(`${this.apiUrl}/update`,userData,{responseType:"json"});
    
  }

  login(emailid: string, passwordid: string) {
    const credentials = { email: emailid, password: passwordid };
    return this.http.post(this.url, credentials,{responseType:"text"})
  }

}
