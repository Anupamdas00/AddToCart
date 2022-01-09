import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any ;
  constructor(private api:ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      return this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })  
       
  }

  addCart(item: any){
    this.cart.addToCart(item)
  }
  
  
}
