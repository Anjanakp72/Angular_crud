import { Action } from '@ngrx/store';
import { Category } from '../models/category.model';
import { Groups } from '../models/groups.model';
import { Products } from '../models/products.model';
import { IsearchFilters } from '../models/search.filters.model'; 

export enum CategoryActionTypes {
    LOAD_CATEGORY = '[CATEGORY] Load Category',
    LOAD_CATEGORY_SUCCESS = '[CATEGORY] Load Category Success',
    LOAD_CATEGORY_FAILURE = '[CATEGORY] Load Category Failure',
    LOAD_GROUP = '[CATEGORY] Load Groups',
    LOAD_GROUP_SUCCESS = '[CATEGORY] Load Groups Success',
    LOAD_GROUP_FAILURE = '[CATEGORY] Load Groups Failure',        
    LOAD_PRODUCT = '[CATEGORY] Load Products',
    LOAD_PRODUCT_SUCCESS = '[CATEGORY] Load Products Success',
    LOAD_PRODUCT_FAILURE = '[CATEGORY] Load Products Failure',
    SEARCH_FILTER = '[CATEGORY] Search Filter',
    ADD_TO_CART = '[CATEGORY] Add to Cart',
    REMOVE_FROM_CART = '[CATEGORY] Remove from Cart'
}

export class LoadCategoryAction implements Action {
    readonly type = CategoryActionTypes.LOAD_CATEGORY;
}

export class LoadCategorySuccessAction implements Action {
    readonly type = CategoryActionTypes.LOAD_CATEGORY_SUCCESS;

    constructor(public payload: Array<Category>){}
}

export class LoadCategoryFailureAction implements Action {
    readonly type = CategoryActionTypes.LOAD_CATEGORY_FAILURE;

    constructor(public payload:Error){}
}

export class LoadGroupAction implements Action {
    readonly type = CategoryActionTypes.LOAD_GROUP;
}

export class LoadGroupSuccessAction implements Action {
    readonly type = CategoryActionTypes.LOAD_GROUP_SUCCESS;

    constructor(public payload: Array<Groups>){}
}

export class LoadGroupsFailureAction implements Action {
    readonly type = CategoryActionTypes.LOAD_GROUP_FAILURE;

    constructor(public payload: Error){}
}

export class LoadProductAction implements Action {
    readonly type = CategoryActionTypes.LOAD_PRODUCT; 
}

export class LoadProductSuccessAction implements Action {
    readonly type = CategoryActionTypes.LOAD_PRODUCT_SUCCESS;

    constructor(public payload: Array<Products>){}
}

export class LoadProductFailureAction implements Action {
    readonly type = CategoryActionTypes.LOAD_PRODUCT_FAILURE;

    constructor(public payload: Error){}
}

export class SearchFilterAction implements Action {
    readonly type = CategoryActionTypes.SEARCH_FILTER;

    constructor(public payload: IsearchFilters){}
}

export class AddToCartAction implements Action {

    readonly type = CategoryActionTypes.ADD_TO_CART;

    constructor(public payload: Products){}
}

export class RemoveFromCartAction implements Action {

    readonly type = CategoryActionTypes.REMOVE_FROM_CART;

    constructor(public payload: Products){}
}

export type CategoryAction = LoadCategoryAction | LoadCategorySuccessAction | LoadCategoryFailureAction | LoadGroupAction | LoadGroupSuccessAction | LoadGroupsFailureAction | LoadProductAction | LoadProductSuccessAction | LoadProductFailureAction | SearchFilterAction | AddToCartAction | RemoveFromCartAction ;
