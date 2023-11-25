import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "../components/homepage/about/aboutSlice";
import contactSlice from "../components/homepage/contact/contactSlice";
import navbarSlice from "../components/homepage/navbar/navbarSlice";
import problemSlice from "../components/problem/problemSlice";
import projectsSlice from "../components/homepage/projects/projectsSlice";
import programmingSlice from "../components/homepage/programming/programmingSlice";

export const store = configureStore({
  reducer: {
    aboutSlice: aboutSlice,
    contactSlice: contactSlice,
    navbarSlice: navbarSlice,
    problemSlice: problemSlice,
    projectsSlice: projectsSlice,
    programmingSlice: programmingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
