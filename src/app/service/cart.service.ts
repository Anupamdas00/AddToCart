import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem:any = [];
  public prodList = new BehaviorSubject<any>([])
  constructor() { }

  getProducts(){
    return this.prodList.asObservable()    
  }

  addToCart(product:any): void{
    this.cartItem.push(product);
    this.prodList.next(this.cartItem);
    this.getTotalPrice();
  }

  getTotalPrice(): number{
    let total = 0;
    this.cartItem.map((a:any) => {
      total += a.price;
    })

    return total;
  }

  removeCartItem(product:any){
    this.cartItem.map((a:any, index:any) => {
      if(product.id === a.id){
        this.cartItem.splice(index,1)
      }
    })
    this.prodList.next(this.cartItem)
  }

  removeAllCart(){
    this.cartItem = [];
    this.prodList.next(this.cartItem)
  }

}
