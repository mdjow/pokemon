import { TestBed, inject } from "@angular/core/testing";

import { PokemonService } from "./pokemon.service";
import { HttpClientTestingModule } from "@angular/common/http/testing"

describe("PokemonService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService],
    });
  });

  it("should be created", inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});
