export interface Init {
  count: number;
  next: string;
  previous: any;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokeDetail {
  abilities: any[];
  forms: any[];
  gameIndices: any[];
  height: number;
  heldItems: any[];
  id: number;
  isDefault: boolean;
  locationAreaEncounters: string;
  moves: any[];
  name: string;
  order: number;
  species: Pokemon;
  sprites: any[];
  stats: any[];
  types: any[];
  weight: number;
  img: string;
}

export class PokemonObj {
  private img: string;
  constructor(private id: number, private name: string, private url: string) {
    this.img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  };
}
