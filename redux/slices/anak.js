import { createSlice } from "@reduxjs/toolkit";

const anakSlice = createSlice({
  nama: "anak",
  initialState: {
    isLoading: false,
    dataAnak: null,
  },
  reducers: {
    setDataAnak: (state, { payload }) => {
      state.dataAnak = payload;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setDataAnak, setLoading } = anakSlice.actions;
export default anakSlice.reducer;
