import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiPath = environment.apiPath;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.apiPath + 'category');
  }

  removeCategory(id: any) {
    return this.http.delete(this.apiPath + 'category');
  }

}
