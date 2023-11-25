import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projects } from "../../../common/constants";
import {
  ProjectDetails,
  setProjectDetails,
  setProjectModalState,
} from "./projectsSlice";
import { ProjectModal } from "./ProjectModal";
import { RootState } from "../../../app/store";
import { Text, VStack } from "@chakra-ui/react";

interface ProjectProps {
  left?: boolean;
  projectDetails: ProjectDetails;
}

interface YearProps {
  year: string;
}

const TimelineBar = () => (
  <div className="col-start-5 col-end-6 md:mx-auto relative sm:mr-10 mr-5">
    <div className="h-full w-7 flex items-center justify-center">
      <div className="h-full w-1 bg-stone-500 dark:bg-blue-900 pointer-events-none duration-200" />
    </div>
    <div className="w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-stone-400 dark:bg-blue-500 border-8 border-white dark:border-slate-800 duration-200" />
  </div>
);

const Project = ({ left = false, projectDetails }: ProjectProps) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex ${left && "flex-row-reverse"} md:contents`}
      onClick={() => {
        dispatch(setProjectModalState(true));
        dispatch(setProjectDetails(projectDetails));
      }}
    >
      {!left && <TimelineBar />}
      <div
        className={`${
          left ? "col-start-1 col-end-5" : "col-start-6 col-end-10"
        } relative bg-stone-400 dark:bg-gray-700 rounded-xl my-4 ml-auto shadow-xl cursor-pointer md:hover:scale-[1.05] transition-all`}
      >
        <div
          className={`absolute [border:20px_solid_transparent] scale-75 xs:scale-100 ${
            left &&
            "md:[border-left:20px_solid_#a8a29e] dark:md:[border-left:20px_solid_#374151] md:[border-right:0] dark:md:[border-right:0] md:-right-[20px] md:left-auto"
          } [border-right:20px_solid_#a8a29e] dark:[border-right:20px_solid_#374151] xs:-left-[40px] -left-[35px] top-1/2 -mt-5 duration-200`}
        />
        <div className="sm:flex m-1 ml-3 hidden">
          <span className="text-white md:text-xl sm:text-xl">
            {projectDetails.title}
          </span>
        </div>
        <div className="flex sm:rounded-t-none rounded-xl overflow-clip">
          <img src={projectDetails.imageUrl} width={400} height={200} />
        </div>
      </div>
      {left && <TimelineBar />}
    </div>
  );
};

const Year = ({ year }: YearProps) => (
  <div className="flex col-start-1 col-end-10 justify-start md:justify-center -ml-[5px] xs:-ml-3 sm:-ml-5 md:ml-0">
    <span className="z-10 sm:px-4 sm:py-2 xs:px-3 xs:py-1 px-2 py-1 text-white bg-stone-400 dark:bg-slate-700 sm:text-2xl xs:text-lg text-sm rounded-border dark:rounded-border rounded-md duration-200">
      {year}
    </span>
  </div>
);

export const Projects = () => {
  const isProjectModalOpen = useSelector(
    (state: RootState) => state.projectsSlice.isProjectModalOpen
  );

  useEffect(() => {
    if (isProjectModalOpen) document.body?.classList.add("overflow-hidden");
    else document.body?.removeAttribute("class");
  }, [isProjectModalOpen]);

  return (
    <VStack>
      <ProjectModal />
      <Text fontSize="3xl" fontWeight="bold" textColor="brown.600">
        Projects
      </Text>
      <div className="flex mt-10">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          <Year year="Now" />
          {projects.map((year) => (
            <Fragment key={year.year}>
              {year.projects.map((project, index) => (
                <Project
                  key={project.key}
                  left={index % 2 === 0}
                  projectDetails={{
                    title: project.title,
                    description: project.description,
                    demoUrl: project.demoUrl,
                    codeUrl: project.codeUrl,
                    imageUrl: project.imageUrl,
                  }}
                />
              ))}
              <Year year={year.year} />
            </Fragment>
          ))}
        </div>
      </div>
    </VStack>
  );
};
