import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    anak: null,
    isLoading: false,
    auth: {
      status: "",
      message: "",
    },
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
      //
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setAnak: (state, action) => (state.anak = action.payload),
    setAuth: (state, action) => {},
  },
});

export const { setLoading, setUserInfo, setAuth } = userSlice.actions;
export default userSlice.reducer;
