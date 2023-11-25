import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProjectDetails {
  title: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
  imageUrl: string;
}

interface Project {
  projectDetails: ProjectDetails;
  isProjectModalOpen: boolean;
}

const initialState: Project = {
  projectDetails: {
    title: "Project Title",
    description: "Project Description",
    demoUrl: "/",
    codeUrl: "/",
    imageUrl: "/",
  },
  isProjectModalOpen: false,
};

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    setProjectDetails: (state, action: PayloadAction<ProjectDetails>) => {
      state.projectDetails = action.payload;
    },
    setProjectModalState: (state, action: PayloadAction<boolean>) => {
      state.isProjectModalOpen = action.payload;
    },
  },
});

export const { setProjectDetails, setProjectModalState } = projectSlice.actions;

export default projectSlice.reducer;
