import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setProjectModalState } from "./projectsSlice";

export const ProjectModal = () => {
  const projectDetails = useSelector(
    (state: RootState) => state.projectsSlice.projectDetails
  );
  const isProjectModalOpen = useSelector(
    (state: RootState) => state.projectsSlice.isProjectModalOpen
  );

  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div
      className={`${
        isProjectModalOpen ? "flex" : "hidden"
      } animate-[modalInAnimation_200ms_ease-in-out] fixed z-40 w-full h-full left-0 top-0 justify-center items-center`}
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50"
        onClick={() => dispatch(setProjectModalState(false))}
      />
      <div className="z-10 flex sm:flex-row flex-col mx-4 max-w-3xl sm:max-h-96 max-h-[600px] rounded-xl bg-white dark:bg-slate-800 overflow-clip">
        <img
          src={projectDetails.imageUrl}
          className="object-cover bg-black hidden sm:flex"
        />
        <div className="flex flex-col">
          <div className="p-2 px-4 flex bg-slate-900">
            <div className="flex w-full justify-between items-center">
              <span className="text-2xl text-stone-500 dark:text-gray-400 font-calpsBold">
                {projectDetails.title}
              </span>
              <div
                className="h-6 w-6 text-blue-500 hover:text-blue-400 cursor-pointer"
                onClick={() => dispatch(setProjectModalState(false))}
              >
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:hidden">
            <img
              src={projectDetails.imageUrl}
              className="flex-1 object-cover"
            />
          </div>
          <div className="m-4 text-justify overflow-y-scroll max-h-48 no-scrollbar">
            <span className="text-stone-400 dark:text-gray-500 text-lg">
              {projectDetails.description}
            </span>
          </div>
          <div className="p-4 pt-0 flex flex-row justify-end">
            <a href={projectDetails.demoUrl} className="focus:outline-none">
              <button className="text-xl text-white bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none rounded-md p-2 px-3">
                Demo
              </button>
            </a>
            <a href={projectDetails.codeUrl} className="focus:outline-none">
              <button className="ml-4 text-xl text-white bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none rounded-md py-2 px-3">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("project-modal") as HTMLElement
  );
};
