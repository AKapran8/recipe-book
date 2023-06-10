import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { IIngredient } from '../../shopping-list/ingredient.model';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../service/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  public recipe: IRecipe | null = null;
  private _recipeId: number = 0;

  private _routeParamsSub: Subscription | null = null;

  constructor(
    private _SLService: ShoppingListService,
    private _recipeService: RecipeService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._initComponent();
  }

  private _initComponent(): void {
    this._getUrlParams();
  }

  private _getUrlParams(): void {
    this._routeParamsSub = this._route.params.subscribe((params: Params) => {
      this._recipeId = +params['id'];

      if (this._recipeId) this._getRecipeById();
    })
  }

  private _getRecipeById(): void {
    this.recipe = this._recipeService.getRecipeById(this._recipeId)
  }

  public addIngredientToSL(
    event: Event,
    ingredients: IIngredient[] = []
  ): void {
    event.preventDefault();
    this._SLService.addIngredientsList(ingredients);
  }

  ngOnDestroy(): void {
    this._routeParamsSub?.unsubscribe();
  }
}
