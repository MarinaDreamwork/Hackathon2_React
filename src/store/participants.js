import { createAction, createSlice } from "@reduxjs/toolkit";
import { localStorageService } from "../services/localStorage.service";
import participantService from "../services/participant.service";

const initialState = localStorageService.getAccessToken()
? {
    data: null,
    isLoading: true,
    error: null,
    auth: { userId: localStorageService.getUserId() },
    isOnline: true
} : {
    data: null,
    isLoading: false,
    error: null,
    auth: null,
    isOnline: false
};

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    participantsRequested: (state) => {
      state.isLoading = true;
    },
    participantsRequestedSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    participantsRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: participantsReducer, actions } = participantsSlice;
const {
  participantsRequested,
  participantsRequestedSuccess,
  participantsRequestedFailed
} = actions;

export const loadParticipantsList = () => async (dispatch) => {
  dispatch(participantsRequested());
  try {
    const { dataContent } = await participantService.get();
    dispatch(participantsRequestedSuccess(dataContent));
  } catch (error) {
    dispatch(participantsRequestedFailed(error.message));
  }
};

export const getIsLoadingStatus = () => (state) => state.participants.isLoading;

export const getParticipants = () => (state) => state.participants.data;


export default participantsReducer;