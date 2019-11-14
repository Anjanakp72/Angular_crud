import { Component, OnInit } from '@angular/core';
import { AppState } from './../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Category} from './../store/models/category.model';
import { Observable } from 'rxjs';
import { LoadCategoryAction } from '../store/actions/category.actions';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
categoryList$: Observable<Array<Category>>;
loading$: Observable<Boolean>;
error$: Observable<Error>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.categoryList$ = this.store.select(store => store.data.categorylist);
    this.loading$ = this.store.select(store => store.data.loading);
    this.error$ = this.store.select(store => store.data.error);

    this.store.dispatch(new LoadCategoryAction());
  }



}
