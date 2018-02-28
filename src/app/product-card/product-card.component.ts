import { Component, Input } from '@angular/core';
import { Products } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input('product') product: Products;
@Input('show-actions') showActions = true;
  constructor(private cartService: ShoppingCartService) { }


  addToCart(product: Products) {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.cartService.create().then(result => {
        localStorage.setItem('cartId', result.key)
      });
    } else {
      
    }
  }
 

}
