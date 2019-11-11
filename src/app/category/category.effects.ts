import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable()
export class CategoryEffects {

    constructor(private actions$: Actions, private dataService : DataService){}
    @Effect()
    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType('[Search Page] Load Categories'),
        mergeMap(() => this.dataService.getAllCategories()
        .pipe(
            map(categories => ({ type: '[Categories API] Categories Loaded Success', payload: categories})),
            catchError(() => EMPTY)
        ))
    )
    );


}