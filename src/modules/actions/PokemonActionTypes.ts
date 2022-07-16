export const SEARCH_POKEMON_REQUEST = "SEARCH_POKEMON_REQUEST";
export const SEARCH_POKEMON_SUCCESS = "SEARCH_POKEMON_SUCCESS";
export const SEARCH_POKEMON_FAILURE = "SEARCH_POKEMON_FAILURE";

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonAbility = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

export interface RequestAction {
  type: typeof SEARCH_POKEMON_REQUEST;
}
export interface SuccessAction {
  type: typeof SEARCH_POKEMON_SUCCESS;
  payload: {
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
  };
}
export interface FailureAction {
  type: typeof SEARCH_POKEMON_FAILURE;
  error: any;
}
export type PokemonActionTypes = RequestAction | SuccessAction | FailureAction;
