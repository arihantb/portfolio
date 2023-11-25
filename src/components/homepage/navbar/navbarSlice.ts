import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Navbar {
  navigationIndex: number;
  isMenuOpen: boolean;
}

const initialState: Navbar = {
  navigationIndex: 0,
  isMenuOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setNavigationIndex: (state, action: PayloadAction<number>) => {
      state.navigationIndex = action.payload;
    },
    setMenuOpenState: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setNavigationIndex, setMenuOpenState } = navbarSlice.actions;

export default navbarSlice.reducer;
