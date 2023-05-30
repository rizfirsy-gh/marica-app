import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    isLogin: false,
    token: null,
    isLoading: false,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isLogin = true;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserLogout: (state) => {
      state.isLogin = false;
      state.userInfo = null;
    },
  },
});

export const { setLoading, setUserInfo, setToken, setUserLogout } =
  userSlice.actions;
export default userSlice.reducer;
