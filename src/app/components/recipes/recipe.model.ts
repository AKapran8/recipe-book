import { IIngredient } from "../shopping-list/ingredient.model";

export interface IRecipe {
    name: string;
    description: string;
    imageUrl: string;
    ingredients: IIngredient[];
}