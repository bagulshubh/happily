import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age:null,
};

const ageSlice = createSlice({
  name: "age",
  initialState: initialState,
  reducers: {
    setage(state, value) {
      state.age = value.payload;
    },
  },
});

export const {setage} = ageSlice.actions;

export default ageSlice.reducer;
