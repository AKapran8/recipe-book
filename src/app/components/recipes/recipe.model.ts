import { IIngredient } from "../shopping-list/ingredient.model";

export interface IRecipe {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    ingredients: IIngredient[];
}