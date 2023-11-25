import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-scroll";
import type { RootState } from "../../../app/store";
import { navigation } from "../../../common/constants";
import { setMenuOpenState } from "./navbarSlice";
import { useColorMode } from "@chakra-ui/react";
import ReactDOM from "react-dom";

const HeaderIcon = () => (
  <div className="flex flex-shrink-0 items-center">
    <svg height="40" viewBox="0 0 290 168.47408698234446">
      <defs id="SvgjsDefs4173"></defs>
      <g
        id="SvgjsG4174"
        transform="matrix(5.6158021853253075,0,0,5.6158021853253075,-11.231604370650615,-56.158016497606766)"
        fill="#3b82f6"
      >
        <path d="M6.88 30.92 l-0.16 0.48 l0.52 -0.16 l0.04 -0.08 l5.48 -20.52 c0.04 -0.24 0.24 -0.64 0.52 -0.64 l5.76 0 c0.28 0 0.52 0.28 0.56 0.52 l5.52 20.68 c0.04 0.04 0.04 0.08 0.04 0.08 l1.12 0.36 c0.28 0.08 0.52 0.44 0.52 0.72 l0 4 c0 0.32 -0.32 0.72 -0.68 0.72 l-7.36 0 c-0.4 0 -0.64 -0.44 -0.68 -0.76 l0 -0.72 c0 -1.04 0 -2.08 0.04 -3.12 c0 -0.32 0.12 -0.68 0.44 -0.8 l0.72 -0.24 l0.04 -0.04 l-0.72 -2.68 s-2.84 0 -4.08 -0.04 l-0.72 0 l-0.44 0 l-0.16 0.8 l0 0.04 l0.16 -0.16 l0.68 0 l-0.92 0.68 c-0.04 0.04 -0.04 0.04 -0.04 0.08 l-0.12 0.6 l0 0.08 l1.88 -1.4 l0.64 0 l-2.6 1.96 l0 0 l0.52 0.2 l2.92 -2.16 l0.6 0 l-2.96 2.24 l-0.36 0 c0.24 0.12 0.44 0.4 0.44 0.72 l0 3.96 c0 0.32 -0.28 0.76 -0.64 0.76 l-7.36 0 c-0.36 0 -0.64 -0.44 -0.64 -0.76 l0 -3.96 c-0.24 0 -0.48 0.24 -0.56 0.44 c-0.04 0.04 -0.04 0.12 -0.08 0.16 l-0.76 0.56 l0.16 -0.6 s0.04 0 0.04 -0.04 l2.64 -1.96 l0.04 0 z M10.68 12.920000000000002 l-1.44 1.08 c0 -0.08 0.12 -0.44 0.12 -0.52 l0.04 -0.08 l0.64 -0.48 l0.64 0 z M9 14.8 l2.56 -1.88 l0.12 0 l-0.12 0.48 l-2.72 2 z M8.68 16.2 l2.64 -2 l-0.16 0.6 l-2.68 2 l0 -0.04 s0.12 -0.36 0.2 -0.56 z M10.8 16.2 l-2.68 2 l0.16 -0.56 l0 -0.04 l2.64 -1.96 l0.04 -0.04 z M17.4 23.2 l-1.32 -6.32 l-0.4 1.84 l0 0.08 c0 0.08 0.08 0.28 0.08 0.36 c-0.08 0.04 -0.24 0.08 -0.24 0.2 l-0.16 0.72 l0.52 -0.4 l0.08 0.4 c0 0.04 0 0.04 -0.04 0.04 l-0.72 0.56 l-0.16 0.76 l1.04 -0.8 l0.08 0.44 l-1.24 0.92 c-0.04 0 -0.04 0.04 -0.04 0.04 l-0.16 0.72 l1.56 -1.12 c0 0.08 0.08 0.32 0.08 0.4 l-0.04 0.04 l-1.56 1.16 l0.12 0 l0.72 0 l0.88 -0.64 l0.08 0.4 c-0.04 0.04 -0.24 0.2 -0.28 0.2 l0.2 0 l0.92 0 z M10.4 17.6 l-2.64 2 l0 -0.04 s0.12 -0.56 0.16 -0.56 l2.6 -1.96 l0.04 -0.04 c0 0.08 -0.12 0.48 -0.16 0.6 z M10.04 19 l-2.68 2 s0.12 -0.4 0.16 -0.6 l2.68 -2 c0 0.04 -0.12 0.56 -0.16 0.6 z M7 22.4 l0.16 -0.6 l2.68 -2.04 l-0.16 0.6 l0 0.04 l-2.64 1.96 z M6.64 23.72 l0.12 -0.52 l2.68 -2 l-0.12 0.52 z M6.44 24.52 l2.68 -2 l-0.16 0.6 l-2.68 2 l0.12 -0.56 c0 -0.04 0.04 -0.04 0.04 -0.04 z M6.08 25.92 l2.64 -2 s-0.08 0.4 -0.16 0.6 l-2.68 2 c0 -0.04 0.16 -0.56 0.2 -0.6 z M5.68 27.32 l2.68 -2 l0 0.04 s-0.12 0.36 -0.16 0.56 l-2.68 2 c0 -0.08 0.12 -0.48 0.16 -0.6 z M5.32 28.72 l2.68 -2 l-0.16 0.6 l-2.72 2 z M4.92 30.119999999999997 l2.68 -2 l0 0.04 s-0.08 0.36 -0.16 0.56 l-2.68 2 z M14.8 31.64 l2.96 -2.24 l0.2 0 l0.04 0.28 l0 0.04 l-2.76 2.08 c0 -0.04 -0.04 -0.12 -0.04 -0.16 l-0.4 0 z M4.56 31.48 l2.68 -2 l-0.16 0.64 l-2.68 2 l0 -0.04 l0.16 -0.56 l0 -0.04 z M15.4 32.28 l2.72 -2 c0.08 0.08 0.16 0.32 0.16 0.32 l0 0.04 l-2.8 2.08 c-0.04 -0.08 -0.08 -0.32 -0.08 -0.44 z M15.68 33.2 l2.72 -2.04 l0.12 0.36 c0 0.04 0 0.04 -0.04 0.08 l-2.76 2.04 l-0.08 -0.36 c0 -0.04 0 -0.04 0.04 -0.08 z M15.88 34.2 c0 -0.04 0.04 -0.04 0.04 -0.04 l1.56 -1.16 c0 0.16 -0.04 0.32 -0.04 0.48 l-2.72 2.04 l0 -0.08 c0 -0.12 0 -0.4 0.12 -0.48 c0.08 -0.08 0.44 -0.36 0.6 -0.44 l0.48 -0.2 z M2 35.64 l2.76 -2.04 l0 0.48 l-2.76 2.08 l0 -0.52 z M14.68 36.16 l0.04 0 l2.72 -2.04 l0 0.48 l-2.76 2.08 l0 -0.52 z M2.6 34.6 l-0.48 0.32 c0.08 -0.12 0.28 -0.32 0.48 -0.32 z M2 36.76 l2.76 -2.04 l0 0.48 l-2.76 2.08 l0 -0.52 z M14.68 37.28 l0.04 0 l2.72 -2.04 l0 0.2 l0 0.28 l-2.76 2.08 l0 -0.2 l0 -0.16 l0 -0.16 z M2 38.36 l0 -0.48 l2.68 -2 c0.04 0 0.04 -0.04 0.08 -0.04 l0 0.48 z M14.68 38.44 l0 -0.04 l2.76 -2.04 l0 0.44 c0 0.04 -0.04 0.04 -0.08 0.08 l-2.68 2.04 l0 -0.08 l0 -0.4 z M2 39 l2.76 -2.04 c0 0.12 0.08 0.28 0.08 0.4 l-2.8 2.08 c-0.04 -0.08 -0.04 -0.24 -0.04 -0.32 l0 -0.12 z M14.76 39.48 l2.76 -2.08 l0.04 0 c0.08 0.12 0.16 0.16 0.28 0.28 l-2.88 2.12 c-0.04 0 -0.2 -0.24 -0.2 -0.32 z M2.36 39.88 l2.84 -2.16 c0.2 0 0.4 0.04 0.56 0.04 l-2.96 2.24 l-0.08 0 c-0.16 0 -0.28 -0.04 -0.36 -0.12 z M3.64 40 l2.96 -2.24 l0.68 0 l-3 2.24 l-0.64 0 z M5.12 40 l3 -2.24 l0.64 0 l-3 2.24 l-0.64 0 z M7.28 40 l-0.64 0 l2.96 -2.24 l0.64 0 z M15.56 40 l3 -2.24 l0.64 0 l-3 2.24 l-0.64 0 z M17.72 40 l-0.64 0 l2.96 -2.24 l0.64 0 z M19.2 40 l-0.64 0 l2.96 -2.24 l0.64 0 z M20.04 40 l2.96 -2.24 l0.4 0 l0 0.16 l-2.76 2.08 l-0.6 0 z M8.76 40 l-0.64 0 l2.56 -1.92 l0 0.48 z M22.12 40 l-0.64 0 l1.92 -1.44 l0 0.48 z M10.04 40 l-0.44 0 l1.08 -0.8 c0 0.32 -0.28 0.8 -0.64 0.8 z M35.72 31.32 l0 -15.56 l-0.92 -0.24 c-0.28 -0.08 -0.56 -0.44 -0.56 -0.76 l0 -4.04 c0 -0.28 0.28 -0.72 0.6 -0.72 l12.12 0 c0.04 0 0.36 0 0.44 0.04 c0.16 0 0.88 0.08 1 0.08 c4.6 0.6 4.76 4.6 4.76 8.32 l-0.12 1.36 c-0.08 1.16 -0.68 2.36 -1.52 3.2 c0.04 0 0.16 0.12 0.16 0.12 c1.56 1.12 1.96 3.48 1.96 5.28 l0 1.36 c0 4.6 -2.12 7.32 -7.04 7.32 l-11.76 0 c-0.36 0 -0.64 -0.44 -0.64 -0.76 l0 -3.92 c0 -0.32 0.24 -0.64 0.56 -0.72 z M30.84 14.36 l0 -0.48 l1.28 -0.96 l0.64 0 z M30.84 15.48 l0 -0.48 l2.72 -2.04 l0 0.48 z M30.84 16.12 l2.72 -2.04 l0 0.48 l-2.72 2.04 l0 -0.48 z M30.84 17.24 l2.68 -2.04 l0.04 0 c0 0.12 0.08 0.28 0.04 0.44 l0 0 l-2.72 2.04 l-0.04 0.04 c-0.04 -0.12 0 -0.28 0 -0.32 l0 -0.16 z M41.16 15.96 l0 1.28 l0.84 -0.6 l0.68 0 l-1.52 1.12 l0 0.6 l2.36 -1.72 l0.64 0 l-3 2.24 l0 1.68 l3.2 0 l0 -0.08 l2.72 -2.08 l0 0.52 l-2.24 1.64 l0.72 0 l0.16 0 l1.32 -1 c0 0.12 -0.08 0.56 -0.12 0.6 l-0.36 0.28 c0.12 0 0.28 -0.12 0.36 -0.16 c0.8 -0.44 0.84 -1.48 0.84 -2.24 c0 -2.04 -0.68 -2.08 -2.48 -2.08 l-4.12 0 z M31.04 18.2 l0.04 -0.04 l2.8 -2.08 c0.04 0 0.12 0.04 0.16 0.08 c0.08 0.04 0.16 0.04 0.28 0.08 l-2.96 2.2 c-0.04 0.04 -0.32 -0.24 -0.32 -0.24 z M32.36 18.68 l-0.36 -0.08 l2.92 -2.16 l0 -0.04 c0.08 0 0.16 0.04 0.16 0.04 l0 0.32 l-2.72 2.08 l0 -0.16 z M42 18.88 l3 -2.24 l0.08 0 l0.2 0 s0.2 0 0.32 0.04 l-2.96 2.2 c-0.04 0.04 -0.04 0 -0.08 0 l-0.56 0 z M43.36 19 l2.88 -2.2 c0.16 0 0.32 0.12 0.36 0.24 l-2.8 2.08 c-0.08 0 -0.44 -0.12 -0.44 -0.12 z M32.36 19.92 l0 -0.48 l2.72 -2.04 l0 0.48 z M44.16 19.52 l2.8 -2.12 c0.04 0.12 0.08 0.28 0.08 0.4 l-2.76 2.08 c-0.08 -0.08 -0.08 -0.24 -0.12 -0.36 z M32.36 20.56 l2.72 -2.04 l0 0.48 l-2.72 2.04 l0 -0.48 z M32.36 22.12 l0 -0.44 l2.72 -2.04 l0 0.44 z M32.36 23.24 l0 -0.48 l2.72 -2.04 l0 0.48 z M32.36 23.88 l2.72 -2.04 l0 0.48 l-2.72 2.04 l0 -0.48 z M32.36 25 l2.72 -2.04 l0 0.48 l-2.72 2.04 l0 -0.48 z M32.36 26.6 l0 -0.48 l2.68 -2.04 l0.04 0 l0 0.48 z M32.36 27.240000000000002 l2.72 -2.08 l0 0.52 l-2.72 2.04 l0 -0.48 z M41.16 26.08 l0.04 1.24 c0.08 -0.08 0.6 -0.48 0.72 -0.56 l0.68 0 l-1.44 1.04 l0 0.64 l2.28 -1.68 l0.6 0 l-2.88 2.12 l0 2.24 l3.88 0 l2.56 -1.92 l0 0.48 l-1.92 1.4 l0.08 0 c0.08 0 0.8 -0.04 0.84 -0.04 l0.92 -0.68 c0 0.16 -0.08 0.32 -0.12 0.44 c0.08 0 0.2 -0.08 0.24 -0.16 c0.6 -0.44 0.6 -1.28 0.6 -1.96 c0 -1.84 -0.36 -2.6 -2.32 -2.6 l-4.76 0 z M32.36 28.36 l2.72 -2.08 l0 0.48 l-2.72 2.08 l0 -0.48 z M41.88 29 l2.96 -2.24 l0.04 0 l0.2 0 l0.32 0 l0.12 0 l-3 2.24 l-0.64 0 z M43.32 29.04 l2.88 -2.16 l0.04 -0.04 c0.08 0 0.4 0.12 0.44 0.16 l-2.88 2.16 c-0.04 0 -0.16 -0.04 -0.16 -0.04 c-0.04 0 -0.28 -0.04 -0.32 -0.08 z M44.28 29.439999999999998 l2.8 -2.12 c0.08 0.04 0.12 0.12 0.12 0.12 c0.04 0.04 0.12 0.2 0.12 0.2 l-2.8 2.08 s-0.2 -0.24 -0.24 -0.28 z M32.36 29.96 l0 -0.48 l2.72 -2.08 l0 0.48 z M44.72 30.2 l2.76 -2.04 c0.04 0 0.08 0.4 0.08 0.44 l-2.76 2.04 c-0.04 -0.2 -0.04 -0.2 -0.08 -0.44 z M32.36 31.08 l0 -0.52 l2.72 -2.04 l0 0.48 z M32.36 31.68 l2.72 -2.04 l0 0.48 l-2.72 2.08 l0 -0.52 z M32.36 33.28 l0 -0.48 l2.72 -2.04 l0 0.48 z M32.36 34.28 l0 -0.36 l1.2 -0.88 l0 0.48 l-2.76 2.04 l0 -0.12 c0 -0.08 0 -0.36 0.08 -0.4 l0.68 -0.52 z M30.8 36.2 l2.76 -2.04 l0 0.44 l-2.76 2.04 l0 -0.44 z M30.8 37.76 l0 -0.48 l2.68 -2 c0.04 0 0.04 -0.04 0.08 -0.04 l0 0.48 z M30.8 38.88 l0 -0.48 l2.76 -2.04 l0 0.48 z M45.28 39.8 l3.08 -2.28 c0.08 -0.04 0.24 -0.08 0.28 -0.08 c0.08 -0.04 0.4 -0.12 0.48 -0.16 l0.04 0 c0 0.04 -0.12 0.2 -0.12 0.2 l-2.8 2.08 c-0.08 0.08 -0.88 0.24 -0.96 0.24 z M30.880000000000003 39.48 l2.76 -2.08 l0.04 0 c0.04 0.12 0.16 0.16 0.24 0.28 l-2.84 2.12 c-0.08 0 -0.24 -0.28 -0.24 -0.32 l0.04 0 z M43.64 39.96 l3 -2.24 l0.64 -0.04 l-3.04 2.28 l-0.6 0 z M31.68 40 l2.96 -2.24 l0.64 0 l-2.96 2.24 l-0.64 0 z M33.160000000000004 40 l2.96 -2.24 l0.68 0 l-3 2.24 l-0.64 0 z M35.32 40 l-0.68 0 l3 -2.24 l0.64 0 z M36.160000000000004 40 l2.96 -2.24 l0.64 0 l-2.96 2.24 l-0.64 0 z M37.64 40 l2.96 -2.24 l0.68 0 l-3 2.24 l-0.64 0 z M39.120000000000005 40 l3 -2.24 l0.64 0 l-2.96 2.24 l-0.68 0 z M41.28 40 l-0.64 0 l2.96 -2.24 l0.64 0 z M42.120000000000005 40 l2.96 -2.24 l0.64 0 l-2.96 2.24 l-0.64 0 z"></path>
      </g>
    </svg>
  </div>
);

const HeaderNavigation = () => (
  <div className="hidden sm:flex items-center sm:justify-center">
    <div className="justify-center items-center sm:ml-6">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.key}
            to={item.key}
            smooth={true}
            spy={true}
            hashSpy={true}
            offset={-64}
            className="text-gray-500 hover:text-gray-900 hover:bg-orange-100 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white px-3 py-2 rounded-md text-2xl duration-200 cursor-pointer"
            activeClass="text-blue-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400 bg-orange-100 dark:bg-slate-800"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const HeaderNavigationDropdown = () => {
  const isMenuOpen = useSelector(
    (state: RootState) => state.navbarSlice.isMenuOpen
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isMenuOpen) document.body?.classList.add("overflow-hidden");
    else document.body?.removeAttribute("class");
  }, [isMenuOpen]);

  return ReactDOM.createPortal(
    <div
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } fixed z-40 w-full h-full left-0 top-0 justify-center items-center`}
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50"
        onClick={() => dispatch(setMenuOpenState(false))}
      >
        <div className="z-20 top-16 min-w-[40%] mr-4 absolute sm:hidden bg-orange-50 dark:bg-slate-900 right-0 rounded-md duration-200">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.key}
                smooth={true}
                spy={true}
                hashSpy={true}
                offset={-64}
                onClick={() => dispatch(setMenuOpenState(false))}
                className="text-gray-500 hover:text-gray-900 hover:bg-orange-100 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white block px-3 py-2 rounded-md xs:text-base text-sm font-medium cursor-pointer uppercase"
                activeClass="text-blue-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400 bg-orange-100 dark:bg-slate-800"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("menu-dropdown") as HTMLElement
  );
};

const DarkModeToggle = () => (
  <button className="flex theme-toggle focus:outline-none" id="theme-toggle">
    <svg
      className="sun-and-moon"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <mask className="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" />
      </mask>
      <circle
        className="sun"
        cx="12"
        cy="12"
        r="6"
        mask="url(#moon-mask)"
        fill="currentColor"
      />
      <g className="sun-beams" stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  </button>
);

const HamburgerMenu = () => {
  const isMenuOpen = useSelector(
    (state: RootState) => state.navbarSlice.isMenuOpen
  );

  const genericHamburgerLine =
    "xs:h-1 xs:w-6 h-[3px] w-4 m-[2px] rounded-full bg-blue-500 transition ease transform duration-300";
  const dispatch = useDispatch();

  return (
    <button
      className="flex flex-col xs:h-8 xs:w-8 h-6 w-6 focus:outline-none rounded justify-center items-center group"
      onClick={() => dispatch(setMenuOpenState(!isMenuOpen))}
    >
      <div
        className={`${genericHamburgerLine} ${
          isMenuOpen && "rotate-45 translate-y-[7px] xs:translate-y-2"
        }`}
      />
      <div className={`${genericHamburgerLine} ${isMenuOpen && "opacity-0"}`} />
      <div
        className={`${genericHamburgerLine} ${
          isMenuOpen && "-rotate-45 -translate-y-[7px] xs:-translate-y-2"
        }`}
      />
    </button>
  );
};

export const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <nav className="sticky top-0 bg-orange-50  z-30 duration-200">
      <div className="mx-auto md:px-8 px-4">
        <div className="relative flex h-16 items-center justify-between">
          <HeaderIcon />
          <HeaderNavigation />
          <div className="flex space-x-4">
            <div
              className="h-10 w-10 xs:h-auto xs:w-auto bg-orange-100 hover:bg-orange-200 [--icon-fill:#3b82f6] hover:[--icon-fill:#60a5fa] [--icon-fill-hover:#60a5fa] dark:bg-slate-800 hover:dark:bg-slate-700 p-3 rounded-md duration-200 cursor-pointer"
              onClick={toggleColorMode}
            >
              <DarkModeToggle />
            </div>
            <div className="h-10 w-10 xs:h-auto xs:w-auto sm:hidden bg-orange-100 hover:bg-orange-200 hover:dark:bg-slate-700 p-2 rounded-md duration-200 cursor-pointer">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
      <HeaderNavigationDropdown />
    </nav>
  );
};
