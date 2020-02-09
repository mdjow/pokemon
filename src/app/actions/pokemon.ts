import { Action } from "@ngrx/store";
import { Init, PokeDetail } from "./../models/pokemon.models";

export const INIT_POKEMON = "INIT_POKEMON";
export const INIT_POKEMON_DONE = "INIT_POKEMON_DONE";
export const INIT_POKEMON_FAILURE = "INIT_POKEMON_FAILURE";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_DONE = "GET_POKEMONS_DONE";
export const GET_POKEMONS_FAILURE = "GET_POKEMONS_FAILURE";

export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_DONE = "GET_POKEMON_DONE";
export const GET_POKEMON_FAILURE = "GET_POKEMON_FAILURE";

export const FAVORITE_POKEMON = "FAVORITE_POKEMON";
export const FAVORITE_POKEMON_DONE = "FAVORITE_POKEMON_DONE";
export const FAVORITE_POKEMON_FAILURE = "FAVORITE_POKEMON_FAILURE";

export class InitPokemon implements Action {
  readonly type = INIT_POKEMON;

  constructor() { }
}

export class InitPokemonDone implements Action {
  readonly type = INIT_POKEMON_DONE;

  constructor(public payload: Init) { }
}

export class InitPokemonFailure implements Action {
  readonly type = INIT_POKEMON_FAILURE;

  constructor(public payload: { error: string }) { }
}

export class GetPokemons implements Action {
  readonly type = GET_POKEMONS;

  constructor(public payload: number) { }
}

export class GetPokemonsDone implements Action {
  readonly type = GET_POKEMONS_DONE;

  constructor(public payload: Init) { }
}

export class GetPokemonsFailure implements Action {
  readonly type = GET_POKEMONS_FAILURE;

  constructor(public payload: { error: string }) { }
}

export class GetPokemon implements Action {
  readonly type = GET_POKEMON;

  constructor(public payload: number) { }
}

export class GetPokemonDone implements Action {
  readonly type = GET_POKEMON_DONE;

  constructor(public payload: PokeDetail) { }
}

export class GetPokemonFailure implements Action {
  readonly type = GET_POKEMON_FAILURE;

  constructor(public payload: { error: string }) { }
}

export class FavoritePokemon implements Action {
  readonly type = FAVORITE_POKEMON;

  constructor(public payload: number) { }
}

export class FavoritePokemonDone implements Action {
  readonly type = FAVORITE_POKEMON_DONE;

  constructor(public payload: Boolean) { }
}

export class FavoritePokemonFailure implements Action {
  readonly type = FAVORITE_POKEMON_FAILURE;

  constructor(public payload: { error: string }) { }
}

export type Actions =
  InitPokemon |
  InitPokemonDone |
  InitPokemonFailure |
  GetPokemons |
  GetPokemonsDone |
  GetPokemonsFailure |
  GetPokemon |
  GetPokemonDone |
  GetPokemonFailure |
  FavoritePokemon |
  FavoritePokemonDone |
  FavoritePokemonFailure;
