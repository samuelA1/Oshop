import { ProductService } from 'shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Products } from 'shared/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
product = { "title": '', "price": '', "category": '', "imageUrl": ''};
id;
  constructor(private categoryService: CategoryService,
     private productService: ProductService,
     private route: ActivatedRoute,
     private router: Router) {
    this.categories$ = categoryService.getAll();

     this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
   }

   save(product) {
     if(this.id) this.productService.update(this.id, product);
     else this.productService.create(product);
     
     this.router.navigate(['/admin/products']);
   }

   delete() {
     if(confirm('Are you sure you want to delete this product?')) {
       this.productService.delete(this.id);
       this.router.navigate(['/admin/products']);
     }
   }



  ngOnInit() {
  }

}

