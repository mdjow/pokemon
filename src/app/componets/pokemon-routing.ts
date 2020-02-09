import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: PokemonListComponent },
  { path: "detail/:id", component: PokemonDetailComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(pokemonRoutes),
  ]

})
export class PokemonRoutingModule { }
