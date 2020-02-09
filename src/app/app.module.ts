
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./core/app-routing.module";
import { PokemonModule } from "./componets/pokemon.module";
import { NotFoundComponent } from "./componets/not-found/not-found.component";
import { PokemonEffects } from "./effects/pokemon.effects";
import { reducer } from "./reducers/pokemon.reducer";
import { PokemonService } from "./services/pokemon.service";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([ PokemonEffects ]),
    StoreModule.forRoot({
      data: reducer,
    }),
    PokemonModule,
    AppRoutingModule,
  ],
  providers: [ PokemonService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
