import { Component, OnInit } from '@angular/core';
import { AppState } from './../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Products } from '../store/models/products.model';
import { Observable } from 'rxjs';
import { LoadCategoryAction, LoadGroupAction, LoadProductAction, SearchFilterAction } from '../store/actions/category.actions';
import { DataState } from '../store/reducers/category.reducer';
import { IsearchFilters } from '../store/models/search.filters.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  productList$: Observable<Array<Products>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  cart$: Observable<Array<Products>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.productList$ = this.store.select(store => store.data.filterProducts);
    this.loading$ = this.store.select(store => store.data.loading);
    this.error$ = this.store.select(store => store.data.error);
    this.cart$ = this.store.select(store => store.data.cart);
    this.store.dispatch(new LoadProductAction());
  }

}
