import { Component, OnInit } from '@angular/core';
import { IIngredient } from './ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  public ingredients: IIngredient[] = [
    { name: 'Tomato', amount: 5 },
    { name: 'Carrot', amount: 4 },
  ];

  constructor(private _shopListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this._initIngredients();
  }

  private _initIngredients(): void {
    this.ingredients = this._shopListService.getIngredients();
  }

}
