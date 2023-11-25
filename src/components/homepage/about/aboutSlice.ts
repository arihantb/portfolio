import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Navbar {
  isAboutVisible: boolean;
}

const initialState: Navbar = {
  isAboutVisible: false,
};

export const aboutSlice = createSlice({
  name: "aboutSlice",
  initialState,
  reducers: {
    setAboutVisibility: (state, action: PayloadAction<boolean>) => {
      state.isAboutVisible = action.payload;
    },
  },
});

export const { setAboutVisibility } = aboutSlice.actions;

export default aboutSlice.reducer;
