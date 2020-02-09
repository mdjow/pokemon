import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonRoutingModule } from "./pokemon-routing";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

import { CustomMaterialModule } from "../core/custom-material/custom-material.module";

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    PokemonRoutingModule
  ],
  declarations: [PokemonListComponent, PokemonDetailComponent]
})
export class PokemonModule { }
