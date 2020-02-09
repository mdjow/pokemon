import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import { State } from "./../../reducers";
import { PokeDetail } from "./../../models/pokemon";
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
  load: boolean;;

  constructor(
    private store: Store<{data: State}>
  ) {
    this.init = store.select(state => state.data);
  }

  ngOnInit() {
    this.myPoke = null;
    this.load = true;

    this.store.dispatch(new PokemonActions.GetPokemon(this.id));

    this.init.subscribe(x => {
      if (x.pokemon) {
        this.myPoke = x.pokemon;
      }
    })
  }

  onLoad() {
    this.load = false;
  }
}
