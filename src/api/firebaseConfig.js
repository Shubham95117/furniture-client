// src/config/firebaseConfig.js
export const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
export const FIREBASE_DATABASE_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL;

export const ENDPOINTS = {
  SIGN_UP: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
  SIGN_IN: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
  userData: (uid, authToken) =>
    `${FIREBASE_DATABASE_URL}/users/${uid}.json?auth=${authToken}`,
};
