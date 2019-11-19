import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../store/models/products.model'
import { AppState } from './../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { DataState } from '../store/reducers/category.reducer';
import { AddToCartAction, RemoveFromCartAction } from '../store/actions/category.actions';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  inCart = false;
  @Input() product: Products[];
  cart$: Observable<Array<Products>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.cart$ = this.store.select(store => store.data.cart);   
    this.cart$.subscribe(crt => {
      crt.forEach(res => {
      if(res && res.productName){
        if(res.productName == this.product['productName']){          
          this.inCart = true;
        }
      }
    });
    });

  }

  addToCart(item: Products) {
    this.store.dispatch(new AddToCartAction(item));
    this.inCart = true;

  }

  removeFromCart(item: Products) {
    this.store.dispatch(new RemoveFromCartAction(item));
    this.inCart = false;
  }

}
