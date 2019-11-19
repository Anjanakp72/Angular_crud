import { Component, OnInit } from '@angular/core';
import { AppState } from './../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Category} from './../store/models/category.model';
import { Groups } from '../store/models/groups.model';
import { Products } from '../store/models/products.model';
import { Observable } from 'rxjs';
import { LoadCategoryAction, LoadGroupAction, LoadProductAction, SearchFilterAction } from '../store/actions/category.actions';
import { DataState } from '../store/reducers/category.reducer';
import { IsearchFilters } from '../store/models/search.filters.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchCat$:string;
  searchGroup$:string;
  model: IsearchFilters = {
    catName : "",
    groupName :  ""
  }

  categoryList$: Observable<Array<Category>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  
  groupList$: Observable<Array<Groups>>;
  productList$: Observable<Array<Products>>;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.categoryList$ = this.store.select(store => store.data.categorylist);
    this.groupList$ = this.store.select(store => store.data.groupslist);
    this.loading$ = this.store.select(store => store.data.loading);
    this.error$ = this.store.select(store => store.data.error);
    

   this.store.dispatch(new LoadCategoryAction());
   this.store.dispatch(new LoadGroupAction());
   //this.store.dispatch(new LoadProductAction());
  }

  filterProducts(){
    console.log(this.model);
    this.store.dispatch(new SearchFilterAction(this.model));
  }

}
