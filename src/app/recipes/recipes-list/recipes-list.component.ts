import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Arroz con Pollo', 'This Food is deliciuos', 'https://www.jamear.com/wp-content/uploads/2017/01/arrozconpollo-peruano.png'),
    new Recipe('Arroz con Pollo', 'This Food is deliciuos', 'https://www.jamear.com/wp-content/uploads/2017/01/arrozconpollo-peruano.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
