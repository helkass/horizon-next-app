import { createSlice } from "@reduxjs/toolkit";

export const ReducerSlice = createSlice({
  name: "horizon-next",
  initialState: {
    client: { toggleForm: false },
  },
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
  },
});

export const { toggleChangeAction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
