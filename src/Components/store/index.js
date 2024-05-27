import { configureStore } from "@reduxjs/toolkit";
import logReg from "../store/LogReg/LogReg";

const store = configureStore({
  reducer: {
    logReg: logReg,
  },
});

export default store;
