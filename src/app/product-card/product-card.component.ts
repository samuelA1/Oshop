import { ShoppingCart } from './../models/shopping-cart';
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
@Input('shopping-cart') shoppingCart: ShoppingCart;
  constructor(private cartService: ShoppingCartService) { }


  addToCart() {
   this.cartService.addToCart(this.product);
  }


}
