import { Action } from '@ngrx/store';
import { Products } from '../models/products.model';

export enum ProductActionTypes {
    LOAD_PRODUCT = '[PRODUCT] Load Products',
    LOAD_PRODUCT_SUCCESS = '[PRODUCT] Load Products Success',
    LOAD_PRODUCT_FAILURE = '[PRODUCT] Load Products Failure'
}

export class LoadProductAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT; 
}

export class LoadProductSuccessAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT_SUCCESS;

    constructor(public payload: Array<Products>){}
}

export class LoadProductFailureAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT_FAILURE;

    constructor(public payload: Error){}
}

export type ProductAction = LoadProductAction | LoadProductSuccessAction | LoadProductFailureAction;