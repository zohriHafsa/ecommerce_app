import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";
// import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products = signal<Product[]>([
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
    {
      "id": 3,
      "title": "MacBook Air M3",
      "image": "https://picsum.photos/300/300?random=3",
      "price": 1299.99,
      "stock": 8
    },
    {
      "id": 4,
      "title": "Sony WH-1000XM5 Headphones",
      "image": "https://picsum.photos/300/300?random=4",
      "price": 399.99,
      "stock": 0
    },
    {
      "id": 5,
      "title": "iPad Pro 12.9",
      "image": "https://picsum.photos/300/300?random=5",
      "price": 1099.99,
      "stock": 12
    },
    {
      "id": 6,
      "title": "Nintendo Switch OLED",
      "image": "https://picsum.photos/300/300?random=6",
      "price": 349.99,
      "stock": 5
    }
  ]);
}
