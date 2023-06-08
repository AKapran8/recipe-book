import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Output() selectItem = new EventEmitter<void>();
  @Input('recipe') recipe: any;

  public onSelectHandler(): void {
    this.selectItem.emit();
  }
}
