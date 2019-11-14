import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category} from '../store/models/category.model';
import { environment } from '../../environments/environment';
import { Groups } from '../store/models/groups.model';
import { Products } from '../store/models/products.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private CATEGORY_URL  = environment.apiPath + 'category';
  private GROUP_URL = environment.apiPath + 'group';
  private PRODUCT_URL = environment.apiPath + 'product';

  constructor(private http: HttpClient) { }

  getCategoryItems() {
    return this.http.get<Category[]>(this.CATEGORY_URL);
  }

  getAllGroups(): Observable<Groups[]>{
    return this.http.get<Groups[]>(this.GROUP_URL);
  }

  getProducts(catName:string = "", groupName:string = ""){    
    return this.http.get<Products[]>(this.PRODUCT_URL);

  }

}
