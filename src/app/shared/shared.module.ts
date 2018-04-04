import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { OrderService } from 'shared/services/order.service';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
   
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule
    
  ], 
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
