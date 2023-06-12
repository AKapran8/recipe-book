import { Component, OnDestroy, OnInit } from '@angular/core';
import { IIngredient } from './ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients: IIngredient[] = [
    { name: 'Tomato', amount: 5 },
    { name: 'Carrot', amount: 4 },
  ];

  private _ingredientsSub: Subscription | null = null;

  constructor(private _shopListService: ShoppingListService) {}

  ngOnInit(): void {
    this._initIngredients();
  }

  private _initIngredients(): void {
    this.ingredients = this._shopListService.getIngredients();
    this._ingredientsSub = this._shopListService.ingredientsChanged.subscribe(
      (list: IIngredient[]) => {
        this.ingredients = [...list];
      }
    );
  }

  ngOnDestroy(): void {
    this._ingredientsSub?.unsubscribe();
  }
}
