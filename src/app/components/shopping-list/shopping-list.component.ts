import { Component } from '@angular/core';
import { IIngredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  public ingredients: IIngredient[] = [
    { name: 'Tomato', amount: 5 },
    { name: 'Carrot', amount: 4 },
  ];

  public addIngredient(ingredient: IIngredient): void {
    this.ingredients.push(ingredient)
  }
}
