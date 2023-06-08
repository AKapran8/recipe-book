import { Component, EventEmitter, Output } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  @Output() selectedRecipe = new EventEmitter<IRecipe>();
  public recipes: IRecipe[] = [
    {
      name: 'This is first recipe',
      description: 'Lorem ipsum',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1664701475272-953393050754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      name: 'This is second recipe',
      description: 'Lorem ipsum',
      imageUrl:
        'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  public onSelectRecipe(recipe: IRecipe): void {
    this.selectedRecipe.emit(recipe);
  }
}
