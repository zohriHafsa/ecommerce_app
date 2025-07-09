import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      "id": 1,
      "title": "iPhone 15 Pro",
      "image": "https://picsum.photos/300/300?random=1",
      "price": 999.99,
      "stock": 15
    },
    {
      "id": 2,
      "title": "Samsung Galaxy S24",
      "image": "https://picsum.photos/300/300?random=2",
      "price": 799.99,
      "stock": 0
    },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);

  }
  removeFromCart(id : number){
    this.cart.set(this.cart().filter((p)=>p.id!==id));
  }
  constructor() { }
}
