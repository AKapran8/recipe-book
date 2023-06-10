import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef | null = null;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef | null = null;

  constructor(private _shopListService: ShoppingListService) { }

  public onAddItem(): void {
    const name: string = this.nameInput?.nativeElement.value
    const amount: number = +this.amountInput?.nativeElement.value
    this._shopListService.addIngredient({ name, amount })
  }

}
