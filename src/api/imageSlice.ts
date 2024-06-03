import { createSlice } from "@reduxjs/toolkit";

interface State {
  currentImage: null | string;
}

const initialState: State = {
  currentImage: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },
    clearCurrentImage: (state) => {
      state.currentImage = null;
    },
  },
});

export const { setCurrentImage, clearCurrentImage } = imageSlice.actions;
export default imageSlice.reducer;
