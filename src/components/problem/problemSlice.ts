import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Headers {
  title: string | undefined;
  difficulty: string | undefined;
  tags: string[] | undefined;
}

interface Sections {
  heading: string;
  paragraphs: {
    type: string;
    content:
      | string
      | {
          language: string | undefined;
          code: string;
        };
    isMultiline: boolean;
  }[][];
}
[];

interface Problem {
  headers: Headers | null;
  markdown: string;
  sections: Sections | null;
}

const initialState: Problem = {
  headers: null,
  markdown: "",
  sections: null,
};

export const problemSlice = createSlice({
  name: "problemSlice",
  initialState,
  reducers: {
    setHeaders: (state, action: PayloadAction<Headers>) => {
      state.headers = action.payload;
    },
    setMarkdown: (state, action: PayloadAction<string>) => {
      state.markdown = action.payload;
    },
    setSections: (state, action: PayloadAction<Sections>) => {
      state.sections = action.payload;
    },
  },
});

export const { setHeaders, setMarkdown, setSections } = problemSlice.actions;

export default problemSlice.reducer;
