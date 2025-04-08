// src/api/auth.js
import axios from "axios";
import { ENDPOINTS } from "./firebaseConfig";

export async function signUp({ email, password }) {
  const payload = { email, password, returnSecureToken: true };
  const response = await axios.post(ENDPOINTS.SIGN_UP, payload);
  return response.data;
}

export async function storeUserData({ uid, idToken, name, mobile, email }) {
  const url = ENDPOINTS.userData(uid, idToken);
  const payload = { name, mobile, email };
  const response = await axios.put(url, payload);
  return response.data;
}

export async function signIn({ email, password }) {
  const payload = { email, password, returnSecureToken: true };
  const response = await axios.post(ENDPOINTS.SIGN_IN, payload);
  return response.data;
}
