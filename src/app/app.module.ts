import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ShoppingEffects } from './store/effects/shopping.effects';
import { ShoppingReducer } from './store/reducers/shopping-reducer';
import { CategoryComponent } from './category/category.component';
import { CategoryEffects } from './store/effects/category.effects';
import { CategoryReducer } from './store/reducers/category.reducer';
import { SearchComponent } from './search/search.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MyCounterComponent,
    CategoryComponent,
    SearchComponent,
    ProductlistComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, StoreModule.forRoot({data: CategoryReducer}),
    AppRoutingModule, EffectsModule.forRoot([CategoryEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
