import axios from "axios";
import { Dispatch } from "redux";
import {
  PokemonActionTypes,
  SEARCH_POKEMON_SUCCESS,
  SEARCH_POKEMON_FAILURE,
} from "./PokemonActionTypes";

export const fetchPokemonData =
  (pokemonName: string | any) =>
  async (dispatch: Dispatch<PokemonActionTypes>) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      );
      const data = res.data;
      dispatch({
        type: SEARCH_POKEMON_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: SEARCH_POKEMON_FAILURE,
        error: err.response.data,
      });
    }
  };
