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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, StoreModule.forRoot({count: counterReducer, shopping: ShoppingReducer}),
    AppRoutingModule, EffectsModule.forRoot([ShoppingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
