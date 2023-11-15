import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName:null,
};

const nameSlice = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    setUserName(state, value) {
      state.userName = value.payload;
    },
  },
});

export const {setUserName} = nameSlice.actions;

export default nameSlice.reducer;
