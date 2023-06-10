import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRecipe } from './recipe.model';
import { RecipeService } from './service/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: IRecipe | null = null;

  private _selectedRecipeSub: Subscription | null = null

  constructor(private _recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this._selectedRecipeSubscription()
  }

  private _selectedRecipeSubscription(): void {

  }

  public showRecipeDetail(recipe: IRecipe): void {
    this.selectedRecipe = recipe;
  }

  ngOnDestroy(): void {
    this._selectedRecipeSub?.unsubscribe();
  }
}
