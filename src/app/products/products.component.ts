import { Products } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products: Products[];
filteredProducts: Products[];

category: string;
  constructor(private productService: ProductService, private route: ActivatedRoute) { 
     productService.getAll().subscribe(products =>{
       this.filteredProducts = this.products = products;

       route.queryParamMap.subscribe(params => {this.category = params.get('category');
    this.filteredProducts = (this.category) ? this.products.filter(p => p.category === this.category) : 
    this.products});
      });
    
    
  }

 

}
