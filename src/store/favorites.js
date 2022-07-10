import { createSlice } from "@reduxjs/toolkit";

const dataLS = localStorage.getItem("favorites");
const participantsLS = dataLS ? JSON.parse(dataLS) : [];

const initialState = {
  selectedParticipants: participantsLS
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addParticipant: (state, action) => {
      // const findParticipant = state.selectedParticipants.find(
      //   (p) => p.id === action.payload.id
      // );

      // if (findParticipant) {
      //   findParticipant = { ...action.payload, isFavorite: true };
      // }
      state.selectedParticipants = [
        ...state.selectedParticipants.filter(
          (obj) => obj.id !== action.payload.id
        ),
        { ...action.payload, isFavorite: true }
      ];

      if (localStorage.getItem("favorites")) {
        const jsonData = localStorage.getItem("favorites");
        const data = JSON.parse(jsonData);
        const newData = [
          ...data.filter((obj) => obj.id !== action.payload.id.id),
          { ...action.payload, isFavorite: true }
        ];
        localStorage.setItem("favorites", JSON.stringify(newData));
      }
    },
    removeParticipant: (state, action) => {
      state.selectedParticipants = state.selectedParticipants.filter(
        (i) => i.id !== action.payload
      );
      const jsonData = localStorage.getItem("favorites");
      const data = JSON.parse(jsonData);
      const newData = [...data.filter((obj) => obj.id !== action.payload)];
      localStorage.setItem("favorites", JSON.stringify(newData));
    }
  }
});

const { reducer: favoritesReducer, actions } = favoritesSlice;
export const { addParticipant, removeParticipant } = actions;

export const getFavorites = () => (state) =>
  state.favorites.selectedParticipants;

export default favoritesReducer;
