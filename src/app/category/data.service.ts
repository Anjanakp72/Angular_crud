import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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
    console.log("remove category service", id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };    
    const deleteUrl = `${this.apiPath}category/${id}`;
    return this.http.delete(deleteUrl, httpOptions);
  }

}
