import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  courseEditor: {
    sections: [],
    isChapterModalOpen: false,
    isSectionModalOpen: false,
    selectedSectionIndex: null,
    selectedChapterIndex: null,
  },
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {}
});

export const {
  
} = globalSlice.actions;

export default globalSlice.reducer;
