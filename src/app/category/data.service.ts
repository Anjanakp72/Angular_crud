import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Store } from "@ngrx/store";
import * as DataActions from "./data.actions";
import { AppState, getAllItems, getDataState } from "./reducers";

export interface Category {
  catName: string;
  parent: string;
}

export interface Groups {
  groupName : string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiPath = environment.apiPath;

  constructor(private store: Store<AppState>, private http: HttpClient) { }

  loadData() {
    console.log("load service data");
    return this.http.get("/assets/testdata.json");
  }

  load() {
    this.store.dispatch(new DataActions.LoadDataBegin());
  }

  getData() {
    return this.store.select(getDataState);
  }

  getItems() {
    return this.store.select(getAllItems);
  }

  getCategories() {
    console.log(this.apiPath + 'category');
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

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiPath + 'category');
  }
  
  getAllGroups(): Observable<Groups[]>{
    return this.http.get<Groups[]>(this.apiPath + 'group');
  }

  getProducts(catName:string = "", groupName:string = ""){    
     return this.http.get(this.apiPath + 'product');
  }
 
}
