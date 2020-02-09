import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";

import { PokeDetail, Init } from "./../models/pokemon.models";

@Injectable()
export class PokemonService {
  private initURL = "https://pokeapi.co/api/v2/pokemon/?limit";
  private pokeURL = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  init(): Observable<Init> {
    return this.http.get<Init>(this.initURL).pipe(
      retry(3)
    );
  }

  getPokemons(size: number): Observable<Init> {
    return this.http.get<Init>(this.initURL + "=" + size).pipe(
      retry(3)
    );
  }

  getPokemon(id: number): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(this.pokeURL + id + "/").pipe(
      retry(3),
    );
  }

  favoritePokemon(id: number): Observable<Boolean> {
    if (!localStorage.getItem(id.toString())) {
      localStorage.setItem(id.toString(), "true");
    } else {
      localStorage.removeItem(id.toString());
    }

    return Observable.create(true);
  }
}
