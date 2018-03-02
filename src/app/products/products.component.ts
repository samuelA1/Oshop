import { Products } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
products: Products[];
filteredProducts: Products[];
category: string;
cart: any;
subscription: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: ShoppingCartService) { 
     productService.getAll().subscribe(products =>{
       this.filteredProducts = this.products = products;

       route.queryParamMap.subscribe(params => {this.category = params.get('category');
    this.filteredProducts = (this.category) ? this.products.filter(p => p.category === this.category) : 
    this.products});
      });
    
    
  }

  async ngOnInit() {
     this.subscription = (await this.cartService.getCart()).subscribe(cart => this.cart = cart)
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

 

}
