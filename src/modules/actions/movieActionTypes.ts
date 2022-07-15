export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";

export type moviesType = {
  movies: movieDataType[];
};

export type movieDataType = {
  movie: {
    Title: string;
    Year: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
  };
};

export interface RequestAction {
  type: typeof SEARCH_MOVIES_REQUEST;
}
export interface SuccessAction {
  type: typeof SEARCH_MOVIES_SUCCESS;
  payload: {
    movies: {
      movie: movieDataType;
    };
  };
}
export interface FailureAction {
  error: any;
  type: typeof SEARCH_MOVIES_FAILURE;
}
export type MovieActionTypes = RequestAction | SuccessAction | FailureAction;
/*  data Example
    Title: "Guardians of the Galaxy Vol. 2";
    Year: "2017";
    Director: "James Gunn";
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista";
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.";
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg";
  };
*/
