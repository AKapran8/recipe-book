import { Component, Input } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { IIngredient } from '../../shopping-list/ingredient.model';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipe: IRecipe | null = null;


  constructor(private _SLService: ShoppingListService) { }

  public addIngredientToSL(event: Event, ingredients: IIngredient[] = []): void {
    event.preventDefault();
    this._SLService.addIngredientsList(ingredients)
  }
}
