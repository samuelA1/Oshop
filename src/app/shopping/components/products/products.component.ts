import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Products } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Products[];
filteredProducts: Products[];
category: string;
cart$: Observable<ShoppingCart>;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: ShoppingCartService) { }

  async ngOnInit() {
     this.cart$ = await this.cartService.getCart();
     this.populateProducts();
  }

  private populateProducts() {
    this.productService.getAll().subscribe(products =>{
      this.filteredProducts = this.products = products;

     this.route.queryParamMap.subscribe(params => {this.category = params.get('category');
     this.applyFilter()
    });
   });
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ? this.products.filter(p => p.category === this.category) : 
    this.products;
  }

}
