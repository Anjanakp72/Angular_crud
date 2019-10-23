import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ListitemComponent } from './listitem/listitem.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [CategoryComponent, ListitemComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  providers: [DataService]
})
export class CategoryModule { }
