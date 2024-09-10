import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../../../Shared/Services/cart-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit{

  cartItems: any[] = [];

  constructor(private cartService: CartServiceService,private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); // Get all items in the cart
    console.log('Cart items:', this.cartItems);
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId); // Remove item from cart
    this.cartItems = this.cartService.getCartItems(); // Update cartItems array
  }

  clearCart() {
    this.cartService.clearCart(); // Clear all items from cart
    this.cartItems = [];
  }
  
}
