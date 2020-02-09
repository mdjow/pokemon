import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: PokemonListComponent },
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
