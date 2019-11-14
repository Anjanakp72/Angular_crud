import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as categoryAction from '../actions/category.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';


@Injectable()
export class CategoryEffects {
    @Effect() loadCategory$ = this.actions$
    .pipe(ofType<categoryAction.LoadCategoryAction>(categoryAction.CategoryActionTypes.LOAD_CATEGORY),
    mergeMap(
        () => this.dataService.getCategoryItems()
        .pipe(map(data => {
            return new categoryAction.LoadCategorySuccessAction(data['body'])
        }),
        catchError(error => of(new categoryAction.LoadCategoryFailureAction(error)))
        )
    ),
    )


        @Effect() loadGroups$ = this.actions$
        .pipe(ofType<categoryAction.LoadGroupAction>(categoryAction.CategoryActionTypes.LOAD_GROUP),
        mergeMap(
            () => this.dataService.getAllGroups()
            .pipe(map(data => {
                return new categoryAction.LoadGroupSuccessAction(data['body'])
            }),
            catchError(error => of(new categoryAction.LoadGroupsFailureAction(error)))
            )
        ),
        )

        @Effect() loadProducts$ = this.actions$
        .pipe(ofType<categoryAction.LoadProductAction>(categoryAction.CategoryActionTypes.LOAD_PRODUCT),
        mergeMap(
            () => this.dataService.getProducts()
            .pipe(map(data => {
                return new categoryAction.LoadProductSuccessAction(data['body'])
            }),
            catchError(error => of(new categoryAction.LoadProductFailureAction(error)))
            )
        ),
        )

    constructor(private actions$: Actions, private dataService: DataService){}
}