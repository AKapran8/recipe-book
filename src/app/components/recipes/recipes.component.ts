import { Component } from '@angular/core';
import { IRecipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  selectedRecipe: IRecipe | null = null;

  public showRecipeDetail(recipe: IRecipe): void {
    console.log(recipe)
    this.selectedRecipe = recipe;
  }
}
