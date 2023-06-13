import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from '../service/shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IIngredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  public form: FormGroup | null = null;
  public editMode: boolean = false;
  public ingredientId: number = 0;
  private _ingredient: IIngredient | null = null;

  private _editIngredientSub: Subscription | null = null;

  constructor(private _shopListService: ShoppingListService) {}

  ngOnInit(): void {
    this._initSubscriptions();
    this._initForm();
  }

  private _initSubscriptions(): void {
    this._editIngredientSub =
      this._shopListService.editingIngredientId.subscribe((index: number) => {
        if (index) {
          this.ingredientId = index;
          this.editMode = true;
          this._ingredient = this._shopListService.getIngredientById(index);
          this._initForm();
        }
      });
  }

  private _initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.editMode ? this._ingredient?.name : '', [
        Validators.required,
      ]),
      amount: new FormControl(this.editMode ? this._ingredient?.amount : null, [
        Validators.required,
        Validators.min(1),
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  public addItemHandler(): void {
    if (!this.form?.valid) return;
    const values: { name: string; amount: number } = this.form?.getRawValue();
    const name: string = values.name.trim() || '';
    const amount: number = values.amount;
    if (this.editMode) {
      this._shopListService.editIngredient({
        name,
        amount,
        id: this.ingredientId,
      });
    } else {
      const id: number = Math.random();
      this._shopListService.addIngredient({ name, amount, id });
    }
    this.resetFormHandler();
  }

  public resetFormHandler(): void {
    this.form?.reset();
  }

  public deleteHandler(): void {
    this._shopListService.deleteIngredient(this.ingredientId);
    this.form?.reset();
  }

  ngOnDestroy(): void {
    this._editIngredientSub?.unsubscribe();
  }
}
