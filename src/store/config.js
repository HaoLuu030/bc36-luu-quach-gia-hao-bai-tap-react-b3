import { combineReducers, createStore } from "redux";
import { shoeReducer } from "./reducers/shoeReducer";

const rootReducer = combineReducers({
  shoeReducer,
});

//the second parameter is required to run redux dev tool
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
