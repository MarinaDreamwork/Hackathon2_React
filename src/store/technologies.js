import { createAction, createSlice } from "@reduxjs/toolkit";
import { generateErrors } from "../app/utils/generateErrors";
import technologyService from "../services/technology.service";

const technologiesSlice = createSlice({
  name: "technologies",
  initialState: {
    data: null,
    isLoading: false,
    error: null
  },
  reducers: {
    technologiesRequested: (state) => {
      state.isLoading = true;
    },
    technologiesRequestedSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    technologiesRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    technologyCreatedRequestSuccess: (state, action) => {
       if (!Array.isArray(state.data)) {
        state.data = [];
      }
        state.data.push(action.payload);
    }
  }
});

const { reducer: technologiesReducer, actions } = technologiesSlice;
const {
  technologiesRequested,
  technologiesRequestedSuccess,
  technologiesRequestedFailed,
  technologyCreatedRequestSuccess
} = actions;

const technologyCreatedRequest = createAction("technologies/createdRequest");
const technologyCreatedRequestFailed = createAction("technologies/createdRequestFailed");

export const loadTechnologiesList = () => async (dispatch) => {
  dispatch(technologiesRequested());
  try {
    const { dataContent } = await technologyService.get();
    dispatch(technologiesRequestedSuccess(dataContent));
  } catch (error) {
    dispatch(technologiesRequestedFailed(error.message));
  }
};

export const createTechnology = (payload) => async (dispatch) => {
  dispatch(technologyCreatedRequest());
  try {
    const dataContent = await technologyService.create(payload);
    dispatch(technologyCreatedRequestSuccess(dataContent));
  } catch (error) {
    dispatch(technologyCreatedRequestFailed(error.message));
  }
};

export const getIsLoadingTechStatus = () => (state) => state.technologies.isLoading;

export const getTechnologies = () => (state) => state.technologies.data;

export default technologiesReducer;