import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IIngredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  public ingredientsChanged = new Subject<IIngredient[]>();
  public editingIngredientId = new Subject<number>();
  private _ingredients: IIngredient[] = [
    { name: 'Tomato', amount: 5, id: 4 },
    { name: 'Carrot', amount: 4, id: 5 },
  ];

  constructor() {}

  public getIngredients(): IIngredient[] {
    return this._ingredients;
  }

  public getIngredientById(id: number): IIngredient | null {
    return this._ingredients.find((i) => i.id === id) || null;
  }

  public addIngredient(ingredient: IIngredient): void {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.next(this._ingredients);
  }

  public editIngredient(editedIngredient: IIngredient): void {
    const modifiedIngredients: IIngredient[] = this._ingredients.map((ing) => {
      if (ing.id === editedIngredient.id) return editedIngredient;
      return ing;
    });

    this._ingredients = JSON.parse(JSON.stringify(modifiedIngredients));
    this.ingredientsChanged.next(this._ingredients);
  }

  public deleteIngredient(id: number): void {
    const modifiedIngredients: IIngredient[] = this._ingredients.filter(
      (ing) => ing.id !== id
    );

    this._ingredients = JSON.parse(JSON.stringify(modifiedIngredients));
    this.ingredientsChanged.next(this._ingredients);
  }

  public addIngredientsList(ingredients: IIngredient[]): void {
    const newIngredientsList: IIngredient[] = [
      ...this._ingredients,
      ...ingredients,
    ];
    this._ingredients = JSON.parse(JSON.stringify(newIngredientsList));
    this.ingredientsChanged.next(this._ingredients);
  }
}
