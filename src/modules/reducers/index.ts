import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

const rootReducer = combineReducers({
  movieReducer,
});

export default rootReducer;

//컴포넌트에서 사용하게될 스토어에 저장된 데이터의 타입입니다.
