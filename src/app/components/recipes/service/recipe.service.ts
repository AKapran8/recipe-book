import { EventEmitter, Injectable } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public selectedRecipe = new EventEmitter<IRecipe | null>();
  private _recipes: IRecipe[] = [
    {
      name: 'This is first recipe',
      description: 'Lorem ipsum',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1664701475272-953393050754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
      ingredients: [{ name: 'Potato', amount: 5 }],
    },
    {
      name: 'This is second recipe',
      description: 'Lorem ipsum',
      imageUrl:
        'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ingredients: [{ name: 'Meat', amount: 35 }, { name: "Lemon", amount: 1 }],
    },
  ];

  constructor() { }

  public getRecipes(): IRecipe[] {
    return this._recipes;
  }
}