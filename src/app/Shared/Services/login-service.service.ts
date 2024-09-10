import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


   private apiUrl = 'https://localhost:7081/api/EcomEase/login'; 

  constructor(private http:HttpClient) { }
  login(loginData: { email: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl, loginData);
  }
  
}
