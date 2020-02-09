import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonService } from "src/app/services/pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { reducer } from "src/app/reducers";

describe("PokemonListComponent", () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      StoreModule.forRoot({
        data: reducer
      }),
    ],
    providers: [ PokemonService ]
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
