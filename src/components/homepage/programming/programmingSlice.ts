import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Programming {
  isBeecrowdVisible: boolean;
  isCodechefVisible: boolean;
  isCodeforcesVisible: boolean;
  isCsesVisible: boolean;
  isHackerearthVisible: boolean;
  isLeetcodeVisible: boolean;
  isSpojVisible: boolean;
}

const initialState: Programming = {
  isBeecrowdVisible: false,
  isCodechefVisible: false,
  isCodeforcesVisible: false,
  isCsesVisible: false,
  isHackerearthVisible: false,
  isLeetcodeVisible: false,
  isSpojVisible: false,
};

export const programmingSlice = createSlice({
  name: "programmingSlice",
  initialState,
  reducers: {
    setBeecrowdVisibility: (state, action: PayloadAction<boolean>) => {
      state.isBeecrowdVisible = action.payload;
    },
    setCodechefVisibility: (state, action: PayloadAction<boolean>) => {
      state.isCodechefVisible = action.payload;
    },
    setCodeforcesVisibility: (state, action: PayloadAction<boolean>) => {
      state.isCodeforcesVisible = action.payload;
    },
    setCsesVisibility: (state, action: PayloadAction<boolean>) => {
      state.isCsesVisible = action.payload;
    },
    setHackerearthVisibility: (state, action: PayloadAction<boolean>) => {
      state.isHackerearthVisible = action.payload;
    },
    setLeetcodeVisibility: (state, action: PayloadAction<boolean>) => {
      state.isLeetcodeVisible = action.payload;
    },
    setSpojVisibility: (state, action: PayloadAction<boolean>) => {
      state.isSpojVisible = action.payload;
    },
  },
});

export const {
  setBeecrowdVisibility,
  setCodechefVisibility,
  setCodeforcesVisibility,
  setCsesVisibility,
  setHackerearthVisibility,
  setLeetcodeVisibility,
  setSpojVisibility,
} = programmingSlice.actions;

export default programmingSlice.reducer;
