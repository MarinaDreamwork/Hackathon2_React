import { createAction, createSlice } from "@reduxjs/toolkit";
import { generateErrors } from "../app/utils/generateErrors";
import keySkillService from "../services/keySkill.service";

const keySkillsSlice = createSlice({
  name: "keySkills",
  initialState: {
    data: null,
    isLoading: false,
    error: null
  },
  reducers: {
    keySkillsRequested: (state) => {
      state.isLoading = true;
    },
    keySkillsRequestedSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    keySkillsRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    keySkillCreatedRequestSuccess: (state, action) => {
       if (!Array.isArray(state.data)) {
        state.data = [];
      }
        state.data.push(action.payload);
    }
  }
});

const { reducer: keySkillsReducer, actions } = keySkillsSlice;
const {
  keySkillsRequested,
  keySkillsRequestedSuccess,
  keySkillsRequestedFailed,
  keySkillCreatedRequestSuccess
} = actions;

const keySkillCreatedRequest = createAction("keySkills/createdRequest");
const keySkillCreatedRequestFailed = createAction("keySkills/createdRequestFailed");

export const loadKeySkillsList = () => async (dispatch) => {
  dispatch(keySkillsRequested());
  try {
    const { dataContent } = await keySkillService.get();
    dispatch(keySkillsRequestedSuccess(dataContent));
  } catch (error) {
    dispatch(keySkillsRequestedFailed(error.message));
  }
};

export const createKeySkill = (payload) => async (dispatch) => {
  dispatch(keySkillCreatedRequest());
  try {
    const dataContent = await keySkillService.create(payload);
    dispatch(keySkillCreatedRequestSuccess(dataContent));
  } catch (error) {
    dispatch(keySkillCreatedRequestFailed(error.message));
  }
};

export const getIsLoadingStatus = () => (state) => state.keySkills.isLoading;

export const getKeySkills = () => (state) => state.keySkills.data;

export default keySkillsReducer;