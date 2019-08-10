import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { RecipesComponent } from './Recipes/Recipes.component';
import { ShoppingListComponent } from './Shopping-List/Shopping-List.component';
import { RecipeDetailComponent } from './Recipes/Recipe-Detail/Recipe-Detail.component';
import { RecipeItemComponent } from './Recipes/Recipe-List/Recipe-Item/Recipe-Item.component';
import { ShoppingEditComponent } from './Shopping-List/Shopping-Edit/Shopping-Edit.component';
import { RecipeListComponent } from './Recipes/Recipe-List/Recipe-List.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      RecipeListComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
