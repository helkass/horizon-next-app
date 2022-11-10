import { createSlice } from "@reduxjs/toolkit";

export const ReducerSlice = createSlice({
  name: "horizon-next",
  initialState: {
    client: {
      toggleForm: false,
      deleteId: null,
    },
  },
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
    deleteAction: (state, action) => {
      state.client.deleteId = action.payload;
    },
  },
});

export const { toggleChangeAction, deleteAction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
