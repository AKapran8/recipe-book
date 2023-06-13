import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../service/recipe.service';
import { IRecipe } from '../recipe.model';
import { IIngredient } from '../../shopping-list/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  public form: FormGroup | null = null;
  public recipeId: number = 0;
  public editMode: boolean = false;
  private _editRecipe: IRecipe | null = null;

  private _paramsSub: Subscription | null = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this._getUrlParams();
    this._initForm();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this._editRecipe?.name || '', [
        Validators.required,
      ]),
      imageUrl: new FormControl(this._editRecipe?.imageUrl || '', [
        Validators.required,
      ]),
      description: new FormControl(this._editRecipe?.description || '', [
        Validators.required,
      ]),
      ingredients: new FormArray([]),
    });

    if (this._editRecipe?.ingredients?.length) {
      this._editRecipe.ingredients.forEach((ing) => {
        this.addIngredientControl(ing);
      });
    } else {
      this.addIngredientControl();
    }
  }

  private _createIngredientFormGroup(ing?: IIngredient): FormGroup {
    return new FormGroup({
      name: new FormControl(ing?.name || '', [Validators.required]),
      amount: new FormControl(ing?.amount || null, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  public addIngredientControl(availableIngredient?: IIngredient): void {
    const ingredients = this.form?.get('ingredients') as FormArray;
    ingredients.push(this._createIngredientFormGroup(availableIngredient));
  }

  public removeIngredientControl(index: number): void {
    (this.form?.get('ingredients') as FormArray).controls.splice(index, 1);
  }

  public getIngredientsControls(): AbstractControl[] {
    const ingredientsFormArray = this.form?.get('ingredients') as FormArray;
    return ingredientsFormArray.controls;
  }

  public getIngredientsLength(): number {
    const ingredientsFormArray = this.form?.get('ingredients') as FormArray;
    return ingredientsFormArray.controls.length;
  }

  private _getUrlParams(): void {
    this._paramsSub = this._route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.editMode = true;
        this.recipeId = +params['id'];
        this._editRecipe = this._recipeService.getRecipeById(this.recipeId);
        this._initForm();
      }
    });
  }

  public cancelHandler(): void {
    this._router.navigate(['/recipes']);
  }

  public removeIngredientsList(): void {
    (<FormArray>this.form?.get('ingredients')).clear();
  }

  public submitHandler(): void {
    const recipe: IRecipe = this.form?.getRawValue();

    if (this.editMode) {
      this._recipeService.editRecipe(this.recipeId, recipe);
    } else {
      const id: number = Math.random();
      this._recipeService.addRecipe({ ...recipe, id });
    }

    this._router.navigate(['/recipes']);
  }

  ngOnDestroy(): void {
    this._paramsSub?.unsubscribe();
  }
}
