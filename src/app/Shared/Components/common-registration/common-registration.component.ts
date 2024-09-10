import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-common-registration',
  templateUrl: './common-registration.component.html',
  styleUrl: './common-registration.component.css'
})
export class CommonRegistrationComponent {
  userData: any = {
    name: '',
    email: '',
    contact: '',
    Address:'',
    city: '',
    state:'',
    country: '',
    rolename: '',
    isActive:true,
  };

  constructor(private http:HttpClient) {}

  setData() {
    debugger;
    
    this.http.post("https://localhost:7081/api/EcomEase/fillRegistration",this.userData).subscribe((val:any)=>{
      alert()
    })
    alert("successfully Data Filled")
    
  } 
}
