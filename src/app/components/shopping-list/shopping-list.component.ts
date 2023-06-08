import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  public ingredients = [
    { name: 'Tomato', amount: 5 },
    { name: 'Carrot', amount: 4 },
  ];
}
