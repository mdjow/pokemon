
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./core/app-routing.module";
import { PokemonModule } from "./componets/pokemon";
import { NotFoundComponent } from "./componets/not-found";
import { PokemonEffects } from "./effects/pokemon";
import { reducer } from "./reducers";
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([PokemonEffects]),
    StoreModule.forRoot({
      data: reducer
    }),
    PokemonModule,
    AppRoutingModule
  ],
  providers: [ PokemonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
