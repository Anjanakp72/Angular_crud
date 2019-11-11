import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { DataService } from './data.service';
import { Category, DataService } from './data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  //categories$: Observable<Category[]> = this.store.select(state => state.categories);
  categories$: Observable<any> ;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      if(data){
        this.categories$ = data['categories'];
      }
      
    })
  }

  getAllCategories(){
    // this.dataService.getCategories().subscribe(res => {
    //   this.categoryListData = res['body'];  
    // });
  }

  removeCategory(category: any) {
    // console.log("remove category", category);
    // this.dataService.removeCategory(category.id);
    // this.getAllCategories();
  }

}
