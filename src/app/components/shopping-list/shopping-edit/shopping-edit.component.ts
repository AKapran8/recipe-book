import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../service/shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  public form: FormGroup | null = null;

  constructor(private _shopListService: ShoppingListService) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      amount: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  public onAddItem(): void {
    if (!this.form?.valid) return;
    const values: { name: string; amount: number } = this.form?.getRawValue();
    const name: string = values.name.trim() || '';
    const amount: number = values.amount;

    this._shopListService.addIngredient({ name, amount });
  }
}
