import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private categoryListData:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  this.getAllCategories();
  }

  getAllCategories(){
    this.dataService.getCategories().subscribe(res => {
      this.categoryListData = res['body'];  
    });
    console.log(this.categoryListData);
  }

  removeCategory(category: any) {
    this.dataService.removeCategory(category.id);
    this.getAllCategories();
  }

}
