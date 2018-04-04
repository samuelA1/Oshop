import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from 'shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = { "name": '', "addressLine1": '', "addressLine2": '', "city": ''};
  userId: string;
  userSubscription: Subscription;
  
  constructor(private orderService: OrderService, private router: Router, private authService: AuthService) { }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart)
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['order-success', result.key])
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
