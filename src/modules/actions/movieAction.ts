import axios from "axios";
import { Dispatch } from "redux";
import {
  MovieActionTypes,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from "./movieActionTypes";

export const fetchMovieData =
  (movieName: string) => async (dispatch: Dispatch<MovieActionTypes>) => {
    try {
      // apiKey = 발급받은 키 , s = 영화제목
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`,
      );
      const data = res.data;
      dispatch({
        type: SEARCH_MOVIES_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: SEARCH_MOVIES_FAILURE,
        error: err.response.data,
      });
    }
  };
