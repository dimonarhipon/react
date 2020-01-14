import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import usersReducer from "./users-reducer.js";
import newsReducer from "./news-reducer.js";

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  newsReducer: newsReducer
});

let store = createStore(reducers);

export default store;
