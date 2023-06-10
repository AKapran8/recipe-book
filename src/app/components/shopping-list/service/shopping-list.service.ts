import { Injectable } from '@angular/core';
import { IIngredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private _ingredients: IIngredient[] = [
    { name: 'Tomato', amount: 5 },
    { name: 'Carrot', amount: 4 },
  ];

  constructor() { }

  public getIngredients(): IIngredient[] {
    return this._ingredients;
  }

  public addIngredient(ingredient: IIngredient): void {
    this._ingredients.push(ingredient)
    this.getIngredients();
  }

  public addIngredientsList(ingredients: IIngredient[]): void {
    const newIngredientsList: IIngredient[] = [...this._ingredients, ...ingredients];
    this._ingredients = JSON.parse(JSON.stringify(newIngredientsList));
    this.getIngredients();
  }
}
