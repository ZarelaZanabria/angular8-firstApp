import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public zarela: Ingredient[] =  [
    new Ingredient ('Tomato', '2 Kilos'),
    new Ingredient ('Potato', '5 Kilod'),
  ];
  constructor() {
    console.log('Ingredientes', this.zarela);

  }

  ngOnInit() {
  }

}
