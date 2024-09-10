import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../../../Shared/Services/cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
products:any[]=[];
userRole: string | null = ''; 

  private api = 'https://localhost:7081/api/EcomEase/getProduct';

  constructor(private http:HttpClient,private router:Router,private cartService:CartServiceService){
     this.userRole = localStorage.getItem('role');}
  


ngOnInit():void{
  
  this.Getproduct();
}
  Getproduct()
  {
    
    this.http.get<any[]>(this.api).subscribe(
      data => this.products=data,
    );
  }
   // Add a product to the cart
   addToCart(product: any) {
    debugger;
    this.cartService.addToCart(product); // Add the product to the cart using CartService
     alert("successfull Added")
  }

  // View the cart page
  viewCart() {
    this.router.navigate(['cartItem']);
  }
  
}
