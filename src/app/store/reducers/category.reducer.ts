import { Category } from '../models/category.model';
import { Groups } from '../models/groups.model';
import { Products } from '../models/products.model';
import { CategoryAction, CategoryActionTypes} from '../actions/category.actions';
import { IsearchFilters } from '../models/search.filters.model';

export interface DataState {
    categorylist: Category[],
    groupslist: Groups[],
    productslist: Products[],
    filters:IsearchFilters,
    filterProducts:Products[],
    cart: Products[];    
    total:number;
    loading: boolean,
    error: Error
}

const initialState: DataState = {
    categorylist: [],
    groupslist: [],
    productslist: [],
    filters:{catName:"", groupName: ""},
    filterProducts:[],
    cart: [],
    total:0,
    loading: false,
    error: undefined
} 

export function CategoryReducer(state: DataState = initialState, action: CategoryAction){
    switch (action.type){
        case CategoryActionTypes.LOAD_CATEGORY:
        return {
            ...state,
            loading: true
        };
        case CategoryActionTypes.LOAD_CATEGORY_SUCCESS:
            return {
                ...state,
                categorylist: action.payload,
                loading:false
            };
        case CategoryActionTypes.LOAD_CATEGORY_FAILURE:
            return {
                ...state,
                error:action.payload,
                loading: false
            };
        case CategoryActionTypes.ADD_TO_CART:            
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.total + Number(action.payload.price),
                loading: false
            }
            case CategoryActionTypes.REMOVE_FROM_CART:
                    
                return {
                    ...state,
                    cart: [...state.cart.filter(item => item !== action.payload)],  
                    total: state.total - Number(action.payload.price),                                  
                    loading: false
                };    
            case CategoryActionTypes.LOAD_GROUP:
                return {
                ...state,
                loading:true
            };
        case CategoryActionTypes.LOAD_GROUP_SUCCESS:
            return {
                ...state,
                groupslist: action.payload,
                loading: false
            };
        case CategoryActionTypes.LOAD_GROUP_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false 
            };
        case CategoryActionTypes.LOAD_PRODUCT:
                return {
                ...state,
                loading:true
            };
        case CategoryActionTypes.LOAD_PRODUCT_SUCCESS:
            return {
                ...state,
                productslist: action.payload,
                filterProducts: action.payload,
                loading: false
            };
        case CategoryActionTypes.LOAD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false 
            };
        case CategoryActionTypes.SEARCH_FILTER:
                let filterQuery = {};
                if(action.payload.catName != "") filterQuery['catName'] = action.payload.catName;
                if(action.payload.groupName != "") filterQuery['groupName'] = action.payload.groupName;
                return {
                    ...state,
                    filters:action.payload,
                    filterProducts: [...state.productslist.filter(item => {
                        for(let key in filterQuery){
                            if(item[key] === undefined || item[key] != filterQuery[key])
                                return false;                        
                        }
                        return true;
                    })]
                };                    
        default:
            return state;
    }
}

