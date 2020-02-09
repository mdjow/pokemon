import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of as observableOf } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as PokemonActions from "./../actions/pokemon";
import { PokemonService } from '../services/pokemon.service';

@Injectable()
export class PokemonEffects {

  constructor(
    private _actions$: Actions,
    private _pokemonService: PokemonService
  ) { }

  @Effect() initPokemon$: Observable<Action> = this._actions$.pipe(
    ofType<PokemonActions.InitPokemon>(
      PokemonActions.INIT_POKEMON
    ),
    switchMap(action => this._pokemonService.init().pipe(
      map(
        items => new PokemonActions.InitPokemonDone(items)
      ),
      catchError(error =>
        observableOf(new PokemonActions.InitPokemonFailure({ error }))
      )
    ))
  )

  @Effect() getPokemons$: Observable<Action> = this._actions$.pipe(
    ofType<PokemonActions.GetPokemons>(
      PokemonActions.GET_POKEMONS
    ),
    switchMap(action => this._pokemonService.getPokemons(action.payload).pipe(
      map(
        items => new PokemonActions.GetPokemonsDone(items)
      ),
      catchError(error =>
        observableOf(new PokemonActions.GetPokemonsFailure({ error }))
      )
    ))
  )

  @Effect() getPokemon$: Observable<Action> = this._actions$.pipe(
    ofType<PokemonActions.GetPokemon>(
      PokemonActions.GET_POKEMON
    ),
    switchMap(action => this._pokemonService.getPokemon(action.payload).pipe(
      map(
        item => new PokemonActions.GetPokemonDone({
          ...item,
          isFavorite: localStorage.getItem(item.id.toString()) ? true : false,
          img: `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`
        })
      ),
      catchError(error =>
        observableOf(new PokemonActions.GetPokemonsFailure({ error }))
      )
    ))
  )

  @Effect() favoritePokemon$: Observable<Action> = this._actions$.pipe(
    ofType<PokemonActions.FavoritePokemon>(
      PokemonActions.FAVORITE_POKEMON
    ),
    switchMap(action => this._pokemonService.favoritePokemon(action.payload).pipe(
      map(
        item => new PokemonActions.FavoritePokemonDone(item)
      ),
      catchError(error =>
        observableOf(new PokemonActions.FavoritePokemonFailure({ error }))
      )
    ))
  )
}
