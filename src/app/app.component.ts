import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';

  constructor() {}  

  ngOnInit(): void {
  }

  // addItem(){
  //   this.newShoppingItem.id = uuid();

  //   this.store.dispatch(new AddItemAction(this.newShoppingItem));
  //   this.newShoppingItem = {"id":"", name: ""};
  // }

  // deleteItem(id: string){
  //   this.store.dispatch(new DeleteItemAction(id));
  // }
}
