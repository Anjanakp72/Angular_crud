import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Products } from '../store/models/products.model';
import { IsearchFilters} from '../store/models/search.filters.model';
import { AppState } from './../store/models/app-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart$: Observable<Array<Products>>;
  productList$: Observable<Array<Products>>;
  searchFilters: IsearchFilters;
  cartTotal$: Observable<number>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.cart$ = this.store.select(store => store.data.cart);
    this.cartTotal$ = this.store.select(store => store.data.total);
  }

}
