import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ListitemComponent } from './listitem/listitem.component';
import { DataService } from './data.service';
import { SearchComponent } from './search/search.component';
import { CategoryEffects } from './category.effects';

@NgModule({
  declarations: [CategoryComponent, ListitemComponent, SearchComponent],
  imports: [
    CommonModule, FormsModule,
    CategoryRoutingModule, EffectsModule.forFeature([CategoryEffects])
  ],
  providers: [DataService]
})
export class CategoryModule { }
