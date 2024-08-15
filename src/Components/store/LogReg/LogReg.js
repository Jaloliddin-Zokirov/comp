import { createSlice } from "@reduxjs/toolkit";

const logReg = createSlice({
  name: "logReg",
  initialState: {
    logReg: 0,
  },
  reducers: {
    editLogReg: (state, action) => {
      state.logReg = action.payload;
    },
  },
});

export const { editLogReg } = logReg.actions;

export default logReg.reducer;
