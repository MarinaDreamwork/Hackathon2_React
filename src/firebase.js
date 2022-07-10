// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_WEB_API_KEY,
  authDomain: 'hackathon-team-8b203.firebaseapp.com',
  databaseURL:
    'https://hackathon-team-8b203-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hackathon-team-8b203',
  storageBucket: 'hackathon-team-8b203.appspot.com',
  messagingSenderId: '1045649193034',
  appId: '1:1045649193034:web:9648663de0defd1b044eb3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
