import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../store/models/products.model'
import { AppState } from './../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { DataState } from '../store/reducers/category.reducer';
import { AddToCartAction, RemoveFromCartAction } from '../store/actions/category.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  inCart = false;
  @Input() product: Products[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
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
