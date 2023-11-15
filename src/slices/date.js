import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date:null,
  session:null,
};

const dateSlice = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    setdate(state, value) {
      state.date = value.payload;
    },
    setsession(state,value){
      state.session = value.payload;
    },
  },
});

export const {setdate,setsession} = dateSlice.actions;

export default dateSlice.reducer;
