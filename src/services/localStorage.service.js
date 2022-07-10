const FIREBASE_TOKEN = "jwt-token";
const FIREBASE_REFRESH_TOKEN = "jwt-refreshToken";
const FIREBASE_EXPIRES_DATE_TOKEN = "jwt-expires-date";
const FIREBASE_PARTICIPANT_ID = "paricipant-id";
const FAVORITES_LOCAL = "favorites";

function setAuthTokens({
  expiresIn = 3600,
  idToken,
  localId,
  refreshToken
}) {
  const expiresDate = new Date().getTime() + expiresIn * 1000;
  localStorage.setItem(FIREBASE_TOKEN, idToken);
  localStorage.setItem(FIREBASE_REFRESH_TOKEN, refreshToken);
  localStorage.setItem(FIREBASE_EXPIRES_DATE_TOKEN, expiresDate);
  localStorage.setItem(FIREBASE_PARTICIPANT_ID, localId);
};

function setFavorites(data) {
  localStorage.setItem(FAVORITES_LOCAL, JSON.stringify(data));
};

function getFavorites() {
  JSON.parse(localStorage.getItem(FAVORITES_LOCAL));
};

function getParticipantId() {
  return localStorage.getItem(FIREBASE_PARTICIPANT_ID);
};

function getAccessToken() {
  return localStorage.getItem(FIREBASE_TOKEN);
};

function getRefreshToken() {
  return localStorage.getItem(FIREBASE_REFRESH_TOKEN);
};

function getTokenExpiresDate() {
  return localStorage.getItem(FIREBASE_EXPIRES_DATE_TOKEN);
};

function removeAuthData() {
  localStorage.removeItem(FIREBASE_TOKEN);
  localStorage.removeItem(FIREBASE_REFRESH_TOKEN);
  localStorage.removeItem(FIREBASE_EXPIRES_DATE_TOKEN);
  localStorage.removeItem(FIREBASE_PARTICIPANT_ID);
};

export const localStorageService = {
  getParticipantId,
  setAuthTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  removeAuthData,
  setFavorites,
  getFavorites
};