import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent  } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  title = signal<string>("ecommerce application using angular 19");
  showbuttonclick() {
    console.log('clicked ')
  }
  cartservice = inject(CartService);

  constructor( private router:Router){}

  navigateToCart(){
    this.router.navigate(['/cart']);
  }
  navigateBack(){
    this.router.navigate(['']);
  }
}
