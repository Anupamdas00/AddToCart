import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartProducts: any = [];
  public grandTotal: number = 0;
  public totalCartProd: number = 0
  constructor(private cart: CartService) { }

  ngOnInit(): void {
   this.cart.getProducts().subscribe( res => {
     this.cartProducts = res;
     this.cartProducts.forEach((a: any) => {
       Object.assign(a, { quantity: 1 });
     });
     this.grandTotal = this.cart.getTotalPrice();
     this.totalCartProd = res.length;
   })
  }

  removeItem(item: any){
    this.cart.removeCartItem(item);
  }
  
  emptyCart(){
    this.cart.removeAllCart();
  }

}
