import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    isLogin: false,
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
    setUserLogout: (state) => {
      state.isLogin = false;
      state.userInfo = null;
    },
  },
});

export const { setLoading, setUserInfo, setUserLogout } = userSlice.actions;
export default userSlice.reducer;
