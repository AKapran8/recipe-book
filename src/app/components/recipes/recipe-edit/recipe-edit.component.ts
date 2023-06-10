import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  public recipeId: number | null = null;
  public editMode: boolean = false;

  private _paramsSub: Subscription | null = null;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._getUrlParams();
  }

  private _getUrlParams(): void {
    this._paramsSub = this._route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.editMode = true;
        this.recipeId = params['id'];
        alert(this.recipeId)
      }
    });
  }

  ngOnDestroy(): void {
    this._paramsSub?.unsubscribe();
  }
}
