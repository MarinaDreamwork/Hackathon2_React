import { combineReducers, configureStore } from "@reduxjs/toolkit";
import keySkillsReducer from "./keySkills";
import participantsReducer from "./participants";

const rootReducer = combineReducers({
  participants: participantsReducer,
  keySkills: keySkillsReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
};