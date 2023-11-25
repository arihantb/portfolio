import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { Fragment } from "react";
import { footerIcons, authorName } from "../../../common/constants";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    if (document.documentElement.scrollTop === 0) {
      document.getElementById("scrollToTop")?.classList.remove("sm:flex");
      document.getElementById("scrollToTop")?.classList.add("sm:hidden");
    } else {
      document.getElementById("scrollToTop")?.classList.remove("sm:hidden");
      document.getElementById("scrollToTop")?.classList.add("sm:flex");
    }
  };

  window.addEventListener("scroll", scrollToTop);

  return (
    <div
      className="sticky sm:flex bottom-6 mr-6 justify-end hidden"
      id="scrollToTop"
    >
      <div
        className="flex h-12 w-12 bg-sky-500 hover:bg-sky-400 rounded-full justify-center items-center shadow-xl duration-200 cursor-pointer"
        onClick={animateScroll.scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} color="white" />
      </div>
    </div>
  );
};

const FooterHeadline = () => (
  <span className="flex justify-center md:justify-start sm:text-lg text-base text-stone-500 dark:text-gray-400 sm:text-center duration-200">
    © {new Date().getFullYear()}&nbsp;
    <a
      href="/"
      target="_blank"
      className="hover:underline focus:outline-none focus:underline"
    >
      {authorName}
    </a>
    . All Rights Reserved.
  </span>
);

const FooterIcons = () => (
  <div className="flex justify-center md:justify-start mt-4 space-x-6 md:mt-0">
    {footerIcons.map((icon) => (
      <a
        key={icon.key}
        target="_blank"
        href={icon.href}
        className="text-stone-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 focus:outline-none focus:text-blue-500 duration-200"
      >
        <FontAwesomeIcon icon={icon.icon} className="w-6 h-6" />
      </a>
    ))}
  </div>
);

export const Footer = () => (
  <Fragment>
    <ScrollToTopButton />
    <div className="p-4 pb-6 md:pb-4 sm:p-6 sm:pt-0 pt-0">
      <hr className="my-6 border-stone-300 sm:mx-auto dark:border-gray-500 lg:my-8 duration-200" />
      <div className="md:flex items-center justify-between">
        <FooterHeadline />
        <FooterIcons />
      </div>
    </div>
  </Fragment>
);
