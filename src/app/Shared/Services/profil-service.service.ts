import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilServiceService {

  private apiUrl = 'https://localhost:7081/api/EcomEase/Profile';

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<any> {
    debugger;
    const authToken = localStorage.getItem('token');
    if (!authToken) {
      throw new Error('No auth token found');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.get(this.apiUrl, { headers });
  }


}
