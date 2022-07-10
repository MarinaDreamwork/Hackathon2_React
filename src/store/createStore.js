import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
import keySkillsReducer from "./keySkills";
import participantsReducer from "./participants";
import technologiesReducer from "./technologies";

const rootReducer = combineReducers({
  participants: participantsReducer,
  keySkills: keySkillsReducer,
  technologies: technologiesReducer,
  favorites: favoritesReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
