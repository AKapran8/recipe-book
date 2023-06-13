import { Injectable } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipesSubject = new Subject<IRecipe[]>();
  private _recipes: IRecipe[] = [
    {
      id: 1,
      name: 'This is first recipe',
      description: 'Lorem ipsum',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1664701475272-953393050754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
      ingredients: [{ name: 'Potato', amount: 5, id: 123 }],
    },
    {
      id: 2,
      name: 'This is second recipe',
      description: 'Lorem ipsum',
      imageUrl:
        'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [
        { name: 'Meat', amount: 35, id: 1 },
        { name: 'Lemon', amount: 1, id: 456 },
      ],
    },
  ];

  constructor() {}

  public getRecipes(): IRecipe[] {
    return this._recipes;
  }

  public getRecipeById(recipeId: number): IRecipe | null {
    const recipe: IRecipe | null =
      this._recipes.find((r) => r.id === recipeId) || null;
    return recipe;
  }

  public addRecipe(newRecipe: IRecipe): void {
    this._recipes.push(newRecipe);
    this.recipesSubject.next(this._recipes);
    console.log(this._recipes);
  }

  public editRecipe(recipeId: number, recipe: IRecipe): void {
    this._recipes = this._recipes.map((r) => {
      if (r.id === recipeId) return { ...recipe, id: recipeId };
      return r;
    });
    this.recipesSubject.next(this._recipes);
  }

  public deleteRecipe(id: number): void {
    this._recipes = this._recipes.filter(r => r.id !== id);
    this.recipesSubject.next(this._recipes);
  }
}
