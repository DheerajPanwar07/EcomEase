import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor() { }

  // Add product to cart
  addToCart(product: any) {
    
    let cartItems = this.getCartItems();
    cartItems.push(product); // Add new product to existing cart
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Store cart in localStorage
  }

  // Retrieve cart items
  getCartItems() {
    let cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  }

  // Remove item from cart
  removeFromCart(productId: number) {
    let cartItems = this.getCartItems();
    cartItems = cartItems.filter((item: any) => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  // Clear cart
  clearCart() {
    localStorage.removeItem('cart');
  }
}
