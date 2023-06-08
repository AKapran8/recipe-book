import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IIngredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef | null = null;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef | null = null;
  @Output() newIngredient = new EventEmitter<IIngredient>();

  constructor() { }

  public onAddItem(): void {
    const name: string = this.nameInput?.nativeElement.value
    const amount: number = +this.amountInput?.nativeElement.value

    this.newIngredient.emit({ name, amount })
  }

}
