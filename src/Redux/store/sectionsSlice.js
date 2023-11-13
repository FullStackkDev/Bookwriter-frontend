import { createSlice } from "@reduxjs/toolkit";

const sectionsSlice = createSlice({
  name: "sections",
  initialState: {
    list: [],
  },
  reducers: {
    setSections(state, action) {
      state.list = action.payload;
    },
    addSection(state, action) {
      state.list.push(action.payload);
    },
    updateSection(state, action) {
      const index = state.list.findIndex(
        (section) => section._id === action.payload._id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteSection(state, action) {
      state.list = state.list.filter(
        (section) => section._id !== action.payload
      );
    },
  },
});

export const { setSections, addSection, updateSection, deleteSection } =
  sectionsSlice.actions;

export default sectionsSlice.reducer;
