import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category} from '../store/models/category.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
private CATEGORY_URL  = environment.apiPath + 'category';

  constructor(private http: HttpClient ) { }

  getCategoryItems() {    
    return this.http.get<Category[]>(this.CATEGORY_URL);
  }

}
