
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../Services/login-service.service';
import {jwtDecode}from 'jwt-Decode';

@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrl: './common-login.component.css'
})
export class CommonLoginComponent {

  userData: any={
    email: '',
    password:'',
  }
  ErrorMessage:string='';

 constructor(private LoginService:LoginServiceService,
  private router:Router
 ) {}


 setData() {
 
  debugger;
    this.LoginService.login(this.userData).subscribe({
      next: response => 
      {
        console.log('Login successful', response.success); 
        console.log('Token', response.data);
        localStorage.setItem('token', response.data);
        this.userData = response.data;
        debugger;
        console.log(this.userData);
        this.router.navigate(['userProfile']);

        const tokendecode:any=jwtDecode(response.data)
        console.log("Decoded token:",tokendecode)
        debugger;
        const role = tokendecode['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        localStorage.setItem('role', role);
        // if (role === '1') {
        //   this.router.navigate(['adminlogin']);
        // } else if (role === '2') {
        //   this.router.navigate(['sellerlogin']);
        // } else if (role === '3') {
        //   this.router.navigate(['buyerLogin']);
        // }

      },
      error: err => {
        console.error('Login failed', err);
        this.ErrorMessage = 'Login failed. Please try again.';
      },
      complete: () => {
        console.log('Login request complete');
      }
    });
  
}
}