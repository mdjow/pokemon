import { PokemonRoutingModule } from "./pokemon-routing";

describe("PokemonRoutingModule", () => {
  let pokemonRoutingModule: PokemonRoutingModule;

  beforeEach(() => {
    pokemonRoutingModule = new PokemonRoutingModule();
  });

  it("should create an instance", () => {
    expect(pokemonRoutingModule).toBeTruthy();
  });
});
