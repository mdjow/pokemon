import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource} from "@angular/material/table";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import { State } from "./../../reducers";
import { PokemonObj } from "./../../models/pokemon";
import * as PokemonActions from "./../../actions/pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({
        height: 0,
        minHeight: 0
      })),
      state("expanded", style({
        height: "*"
      })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class PokemonListComponent implements OnInit {
  expandedElement: State | null;

  init: Observable<State>;
  load: boolean;
  data: PokemonObj[] = [];
  dataSource: MatTableDataSource<PokemonObj>;
  displayedColumns = ["id", "name", "url"];
  paginatorSize: number[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<{data: State}>) {
    store.dispatch(new PokemonActions.InitPokemon());
    this.init = store.select(state => state.data);
  }

  ngOnInit() {
    this.load = false;
    this.init.subscribe(x => {

      if (x.size && x.pokemons.length == 0) {
        this.store.dispatch(new PokemonActions.GetPokemons(x.size));
      }

      if (x.pokemons.length > 0 && this.data.length == 0) {
        this.data = x.pokemons.map(poke => {
          let id = parseInt(poke.url.split("/")[6]);
          return new PokemonObj(id, poke.name, poke.url)
        });

        this.dataSource = new MatTableDataSource<PokemonObj>(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.load = true;
      }

    });

    this.paginatorSize = [5, 10, 20];
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectRow(row: State): void {
    this.expandedElement = this.expandedElement === row ? null : row;
  }
}
