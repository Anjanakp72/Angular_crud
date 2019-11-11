import { Component, OnInit } from '@angular/core';
import { AppState } from './store/models/app-state.model';
import { Store } from '@ngrx/store';
import { ShoppingItem } from './store/models/shopping-item.model';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AddItemAction, DeleteItemAction, ShoppingActionTypes, LoadShoppingAction } from './store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: ''};
  loading$:Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<AppState>) {}  

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list); 
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);

    this.store.dispatch(new LoadShoppingAction());
  }

  addItem(){
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {"id":"", name: ""};
  }

  deleteItem(id: string){
    this.store.dispatch(new DeleteItemAction(id));
  }
}
