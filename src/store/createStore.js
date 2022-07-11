import { combineReducers, configureStore } from '@reduxjs/toolkit';
import keySkillsReducer from './keySkills';
import participantsReducer from './participants';
import technologiesReducer from './technologies';

const rootReducer = combineReducers({
  participants: participantsReducer,
  keySkills: keySkillsReducer,
  technologies: technologiesReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
