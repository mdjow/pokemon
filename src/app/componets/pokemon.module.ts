import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { CustomMaterialModule } from "../core/custom-material/custom-material.module";
import { PokemonRoutingModule } from "./pokemon-routing";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    PokemonRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
})
export class PokemonModule { }
