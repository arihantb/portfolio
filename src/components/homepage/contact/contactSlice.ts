import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  name: string;
}

const initialState: Contact = {
  name: "No Name",
};

export const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = contactSlice.actions;

export default contactSlice.reducer;
