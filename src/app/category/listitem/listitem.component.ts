import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  @Input() categoryData: any;
  @Output() categoryClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //console.log("cat", this.categoryData);
  }

  deleteCat(){
    this.categoryClicked.emit();
  }
}
