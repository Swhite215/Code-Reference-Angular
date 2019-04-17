import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./components/shopping-list-edit/shopping-list-edit.component";
import { RecipeListComponent } from "./components/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./components/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { HeaderComponent } from "./layout/header.component";
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}