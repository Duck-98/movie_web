import { MovieActionTypes, moviesType } from "../actions/movieActionTypes";
interface initialStateType {
  loading: boolean;
  success: boolean;
  movies?: moviesType[];
  errorMessage: null;
}
const initialState: initialStateType = {
  loading: true,
  success: false,
  movies: [],
  errorMessage: null,
};

export const movieReducer = (
  state = initialState,
  action: MovieActionTypes,
): initialStateType => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        success: false,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
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
