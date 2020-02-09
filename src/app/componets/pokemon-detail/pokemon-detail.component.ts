import { Component, OnInit, Input } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { State } from "./../../reducers/pokemon.reducer";
import { PokeDetail } from "./../../models/pokemon.models";
import * as PokemonActions from "./../../actions/pokemon";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  @Input() id: number;
  @Input() name: number;

  init: Observable<State>;
  myPoke: PokeDetail | null;
  faStar = faStar;

  isBusy: boolean;
  get isBusyHeight() { return this.isBusy ? "0" : "auto" };
  get isBusyOpacity() { return this.isBusy ? "0" : "1" };
  get isBusyVisibility() { return this.isBusy ? "hidden" : "visible"};

  get isBusyLoadOpacity() { return !this.isBusy ? "0" : "1" };
  get isBusyLoadVisibility() { return !this.isBusy ? "hidden" : "visible"};

  constructor(private store: Store<{data: State}>) {
    this.init = store.select(state => state.data);
  }

  ngOnInit() {
    this.myPoke = null;
    this.isBusy = true;

    this.store.dispatch(new PokemonActions.GetPokemon(this.id));

    this.init.subscribe(x => {
      if (x.pokemon) {
        this.myPoke = x.pokemon;
      }
    })
  }

  favoritePoke() {
    this.myPoke = { ...this.myPoke, isFavorite: !this.myPoke.isFavorite };
    this.store.dispatch(new PokemonActions.FavoritePokemon(this.id));
  }

  onLoadImg() {
    this.isBusy = false;
  }

  onErrorImg(ref: PokeDetail) {
    this.isBusy = false;

    ref.img =
      ref.sprites.front_default ?
        ref.sprites.front_default : "assets/img/pokemon.png";
  }
}
