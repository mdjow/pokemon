import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";

import { PokemonDetailComponent } from "./pokemon-detail.component";
import { reducer } from "src/app/reducers";
import { PokemonService } from "src/app/services/pokemon.service";

describe("PokemonDetailComponent", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      StoreModule.forRoot({
        data: reducer
      }),
    ],
    providers: [ PokemonService ],
  }));

  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
