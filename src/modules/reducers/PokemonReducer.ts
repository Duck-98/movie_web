import { PokemonActionTypes, PokemonType } from "../actions/PokemonActionTypes";
interface initialStateType {
  loading: boolean;
  success: boolean;
  pokemon?: PokemonType;
  errorMessage: null;
}
const initialState: initialStateType = {
  loading: true,
  success: false,
  errorMessage: null,
};

export const PokemonReducer = (
  state = initialState,
  action: PokemonActionTypes,
): initialStateType => {
  switch (action.type) {
    case "SEARCH_POKEMON_REQUEST":
      return {
        ...state,
        loading: true,
        success: false,
        errorMessage: null,
      };
    case "SEARCH_POKEMON_SUCCESS":
      const { sprites, abilities } = action.payload;
      return {
        ...state,
        loading: false,
        success: true,
        pokemon: { abilities, sprites },
      };
    case "SEARCH_POKEMON_FAILURE":
      return {
        ...state,
        loading: false,
        success: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
