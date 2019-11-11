import * as fromData from './data.actions';
import { DataService } from './data.service';

export interface DataState {
    categories: any,
    loading: boolean;
    error: any;
}

export const initialState: DataState = {
    categories: [],
    loading: false,
    error: null
};

export function reducer(
    state = initialState,
    action: fromData.ActionsUnion
): DataState {
    switch (action.type) {
        case fromData.ActionTypes.LoadDataBegin: {
          return {
            ...state,
            loading: true,
            error: null
          };
        }
    
        case fromData.ActionTypes.LoadDataSuccess: {
          return {
            ...state,
            loading: false,
            categories: action.payload.data
          };
        }
    
        case fromData.ActionTypes.LoadDataFailure: {
          return {
            ...state,
            loading: false,
            error: action.payload.error
          };
        }
    
        default: {
          return state;
        }
      }
    }
    
    export const getItems = (state: DataState) => state.categories;