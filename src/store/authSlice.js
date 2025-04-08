// src/store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ENDPOINTS } from "../api/firebaseConfig";

// Define an initial state structure
const initialState = {
  user: {
    token: null,
    userId: null,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  },
  loading: false,
  error: null,
};

// A helper function to initialize state from localStorage if available
const getInitialState = () => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    return { ...initialState, user: JSON.parse(storedUser) };
  }
  return initialState;
};

// Async thunk to handle user signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    { email, password, firstName, lastName, mobile },
    { rejectWithValue }
  ) => {
    try {
      // Step 1: Sign up with Firebase Authentication
      const signupResponse = await axios.post(ENDPOINTS.SIGN_UP, {
        email,
        password,
        returnSecureToken: true,
      });
      const { idToken, localId } = signupResponse.data;

      // Step 2: Save additional profile info to Firebase Realtime Database
      const profileData = { firstName, lastName, email, mobile };
      await axios.put(ENDPOINTS.userData(localId, idToken), profileData);

      // Combine the token, user ID and profile data into a single object
      return {
        token: idToken,
        userId: localId,
        ...profileData,
      };
    } catch (error) {
      // If an error occurs, pass it to the rejected action
      const errorMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

// Async thunk to handle user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Step 1: Log in via Firebase Authentication using the SIGN_IN endpoint
      const loginResponse = await axios.post(ENDPOINTS.SIGN_IN, {
        email,
        password,
        returnSecureToken: true,
      });
      const { idToken, localId } = loginResponse.data;

      // Step 2: Retrieve additional profile info from Firebase Realtime Database
      const userDataResponse = await axios.get(
        ENDPOINTS.userData(localId, idToken)
      );
      const profileData = userDataResponse.data; // Expecting { firstName, lastName, email, mobile }

      // Combine the token, user ID and profile data into a single object
      return {
        token: idToken,
        userId: localId,
        ...profileData,
      };
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.error
          ? error.response.data.error.message
          : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    // Action to log the user out and clear stored data
    logout(state) {
      state.user = {
        token: null,
        userId: null,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
      };
      state.error = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    // Handle signupUser actions
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store all user details under "user"
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Handle loginUser actions
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the logout action and the reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
