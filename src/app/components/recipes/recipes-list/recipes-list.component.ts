import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  public recipes: IRecipe[] = [];

  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this._initRecipes();
  }

  private _initRecipes(): void {
    this.recipes = [...this._recipeService.getRecipes()];
    this._recipeService.recipesSubject.subscribe((res) => {
      this.recipes = [...res];
    });
  }
}
