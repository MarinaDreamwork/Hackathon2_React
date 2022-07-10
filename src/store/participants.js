import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import { localStorageService } from "../services/localStorage.service";
import participantService from "../services/participant.service";
import { generateErrors } from "../app/utils/generateErrors";

const initialState = localStorageService.getAccessToken()
? {
    data: null,
    isLoading: true,
    error: null,
    auth: { userId: localStorageService.getParticipantId() },
    isOnline: true,
    dataLoaded: false
} : {
    data: null,
    isLoading: false,
    error: null,
    auth: null,
    isOnline: false,
    dataLoaded: false
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
      state.dataLoaded = true;
    },
    participantsRequestedFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestedSuccess: (state, action) => {
      state.auth = action.payload;
      state.isOnline = true;
    },
    participantCreatedRequestSuccess: (state, action) => {
       if (!Array.isArray(state.data)) {
        state.data = [];
      }
        state.data.push(action.payload);
    }
  }
});

const { reducer: participantsReducer, actions } = participantsSlice;
const {
  participantsRequested,
  participantsRequestedSuccess,
  participantsRequestedFailed,
  authRequestedSuccess,
  participantCreatedRequestSuccess
} = actions;

const authRequested = createAction("participants/authRequest");
const authRequestFailed = createAction("participants/authRequestFailed");
const participantCreatedRequest = createAction("participants/createdRequest");
const participantCreatedRequestFailed = createAction("participants/createdRequestFailed");

export const loadParticipantsList = () => async (dispatch) => {
  dispatch(participantsRequested());
  try {
    const { dataContent } = await participantService.get();
    dispatch(participantsRequestedSuccess(dataContent));
  } catch (error) {
    dispatch(participantsRequestedFailed(error.message));
  }
};

export const signUp = ({
  email,
  password,
  ...rest 
}) => async (dispatch) => {
    dispatch(authRequested());
    try {
      const dataContent = await authService.register({ email, password });
      localStorageService.setAuthTokens(dataContent);
      dispatch(authRequestedSuccess({ userId: dataContent.localId }));
      dispatch(createParticipant({
      id: dataContent.localId,
      email,
      ...rest
    }));
  } catch (error) {
    const { code, message } = error.response.data.error;
    if (code === 400) {
    const errorMessage = generateErrors(message);
    dispatch(authRequestFailed(errorMessage));
    }
  }
};

export const createParticipant = (payload) => async (dispatch) => {
  dispatch(participantCreatedRequest());
  try {
    const dataContent = await participantService.create(payload);
    dispatch(participantCreatedRequestSuccess(dataContent));
  } catch (error) {
    dispatch(participantCreatedRequestFailed(error.message));
  }
};

export const logIn = ( payload ) => async (dispatch) => {
  dispatch(authRequested());
  const { email, password } = payload;
  try {
    const dataContent = await authService.logIn({ email, password });
    dispatch(authRequestedSuccess({ userId: dataContent.localId }));
    localStorageService.setAuthTokens(dataContent);
  } catch (error) {
    console.log("error", error);
    const { code, message } = error.response.data.error;
    if (code === 400) {
    const errorMessage = generateErrors(message);
    dispatch(authRequestFailed(errorMessage));
    }
  }
};

export const getIsLoadingStatus = () => (state) => state.participants.isLoading;

export const getParticipants = () => (state) => state.participants.data;
export const getDataLoadedStatus = () => (state) => state.participants.dataLoaded;

export default participantsReducer;