import { combineReducers, configureStore } from "@reduxjs/toolkit";
import participantsReducer from "./participants";

const rootReducer = combineReducers({
  participants: participantsReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
};