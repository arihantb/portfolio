import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SmoothCollapse from "react-smooth-collapse";
import { RootState } from "../../../app/store";
import {
  beecrowdData,
  codechefData,
  codeforcesData,
  csesData,
  hackerearthData,
  leetcodeData,
  spojData,
} from "../../../common";
import {
  setBeecrowdVisibility,
  setCodechefVisibility,
  setCodeforcesVisibility,
  setCsesVisibility,
  setHackerearthVisibility,
  setLeetcodeVisibility,
  setSpojVisibility,
} from "./programmingSlice";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const getProblems = (
  category: string,
  data: {
    difficulty: string | null;
    link: string;
    number: string;
    solved: string;
    title: string;
  }[]
) => {
  const table: JSX.Element[] = [];
  let rowElements: JSX.Element[] = [];

  data.map((problem, index) => {
    rowElements.push(
      <td
        key={index}
        className={`p-2 text-center text-xl text-white border border-black ${
          problem.solved === "True" && problem.difficulty
            ? problem.difficulty === "Easy"
              ? "bg-green-500"
              : problem.difficulty === "Medium"
              ? "bg-yellow-500"
              : "bg-red-500"
            : "bg-gray-500"
        }`}
      >
        {problem.solved === "True" ? (
          <Link target="_blank" to={`/problem/${category}/${problem.number}`}>
            {problem.number}
          </Link>
        ) : (
          problem.number
        )}
      </td>
    );

    if (!((index + 1) % 20)) {
      table.push(<tr key={index}>{rowElements}</tr>);
      rowElements = [];
    }
  });

  if (rowElements.length) {
    table.push(<tr key={rowElements.length}>{rowElements}</tr>);
    rowElements = [];
  }

  return table;
};

const beecrowdProblems = getProblems("beecrowd", beecrowdData);
const codechefProblems = getProblems("codechef", codechefData);
const codeforcesProblems = getProblems("codeforces", codeforcesData);
const csesProblems = getProblems("cses", csesData);
const hackerearthProblems = getProblems("hackerearth", hackerearthData);
const leetcodeProblems = getProblems("leetcode", leetcodeData);
const spojProblems = getProblems("spoj", spojData);

export const Programming = () => {
  const isBeecrowdVisible = useSelector(
    (state: RootState) => state.programmingSlice.isBeecrowdVisible
  );
  const isCodechefVisible = useSelector(
    (state: RootState) => state.programmingSlice.isCodechefVisible
  );
  const isCodeforcesVisible = useSelector(
    (state: RootState) => state.programmingSlice.isCodeforcesVisible
  );
  const isCsesVisible = useSelector(
    (state: RootState) => state.programmingSlice.isCsesVisible
  );
  const isHackerearthVisible = useSelector(
    (state: RootState) => state.programmingSlice.isHackerearthVisible
  );
  const isLeetcodeVisible = useSelector(
    (state: RootState) => state.programmingSlice.isLeetcodeVisible
  );
  const isSpojVisible = useSelector(
    (state: RootState) => state.programmingSlice.isSpojVisible
  );
  const dispatch = useDispatch();

  const data = [
    beecrowdProblems,
    codechefProblems,
    codeforcesProblems,
    csesProblems,
    hackerearthProblems,
    leetcodeProblems,
    spojProblems,
  ];

  let currentVisible: boolean[] = [
    isBeecrowdVisible,
    isCodechefVisible,
    isCodeforcesVisible,
    isCsesVisible,
    isHackerearthVisible,
    isLeetcodeVisible,
    isSpojVisible,
  ];

  let currentVisibleFunction: Function[] = [
    setBeecrowdVisibility,
    setCodechefVisibility,
    setCodeforcesVisibility,
    setCsesVisibility,
    setHackerearthVisibility,
    setLeetcodeVisibility,
    setSpojVisibility,
  ];

  return (
    <VStack>
      <Text fontSize="3xl" fontWeight="bold" textColor="brown.600">
        Programming
      </Text>
      <HStack gap={4}>
        <Box
          cursor="pointer"
          className="flip-text text-sm xs:text-xl md:text-2xl"
          data-replace="Beecrowd"
          onClick={() => {
            for (let index = 0; index < currentVisible.length; index++) {
              if (currentVisible[index])
                dispatch(currentVisibleFunction[index](!currentVisible[index]));
            }

            dispatch(setBeecrowdVisibility(!isBeecrowdVisible));
          }}
        >
          <Text textColor="blue.500">Beecrowd</Text>
        </Box>
        <Box
          cursor="pointer"
          className="flip-text text-sm xs:text-xl md:text-2xl"
          data-replace="Codechef"
          onClick={() => {
            for (let index = 0; index < currentVisible.length; index++) {
              if (currentVisible[index])
                dispatch(currentVisibleFunction[index](!currentVisible[index]));
            }

            dispatch(setCodechefVisibility(!isCodechefVisible));
          }}
        >
          <Text textColor="blue.500">Codechef</Text>
        </Box>
        <Box
          cursor="pointer"
          className="flip-text text-sm xs:text-xl md:text-2xl"
          data-replace="Codeforces"
          onClick={() => {
            for (let index = 0; index < currentVisible.length; index++) {
              if (currentVisible[index])
                dispatch(currentVisibleFunction[index](!currentVisible[index]));
            }

            dispatch(setCodeforcesVisibility(!isCodeforcesVisible));
          }}
        >
          <Text textColor="blue.500">Codeforces</Text>
        </Box>
        <Box
          cursor="pointer"
          className="flip-text text-sm xs:text-xl md:text-2xl"
          data-replace="CSES"
          onClick={() => {
            for (let index = 0; index < currentVisible.length; index++) {
              if (currentVisible[index])
                dispatch(currentVisibleFunction[index](!currentVisible[index]));
            }

            dispatch(setCsesVisibility(!isCsesVisible));
          }}
        >
          <Text textColor="blue.500">CSES</Text>
        </Box>
        <Box
          cursor="pointer"
          className="flip-text text-sm xs:text-xl md:text-2xl"
          data-replace="HackerEarth"
          onClick={() => {
            for (let index = 0; index < currentVisible.length; index++) {
              if (currentVisible[index])
                dispatch(currentVisibleFunction[index](!currentVisible[index]));
            }

            dispatch(setHackerearthVisibility(!isHackerearthVisible));
          }}
        >
          <Text textColor="blue.500">HackerEarth</Text>
        </Box>
        <Box
          cursor="pointer"
          className="flip-text text-sm xs:text-xl md:text-2xl"
          data-replace="Leetcode"
          onClick={() => {
            for (let index = 0; index < currentVisible.length; index++) {
              if (currentVisible[index])
                dispatch(currentVisibleFunction[index](!currentVisible[index]));
            }

            dispatch(setLeetcodeVisibility(!isLeetcodeVisible));
          }}
        >
          <Text textColor="blue.500">Leetcode</Text>
        </Box>
        <Box
          cursor="pointer"
          className="flip-text text-sm xs:text-xl md:text-2xl"
          data-replace="SPOJ"
          onClick={() => {
            for (let index = 0; index < currentVisible.length; index++) {
              if (currentVisible[index])
                dispatch(currentVisibleFunction[index](!currentVisible[index]));
            }

            dispatch(setSpojVisibility(!isSpojVisible));
          }}
        >
          <Text textColor="blue.500">SPOJ</Text>
        </Box>
        <Link target="_blank" to="/patterns">
          <Box
            cursor="pointer"
            className="flip-text text-sm xs:text-xl md:text-2xl"
            data-replace="Patterns"
          >
            <Text textColor="blue.500">Patterns</Text>
          </Box>
        </Link>
        <Link target="_blank" to="/tipsntricks">
          <Box
            cursor="pointer"
            className="flip-text text-sm xs:text-xl md:text-2xl"
            data-replace="Tips N Tricks"
          >
            <Text textColor="blue.500">Tips N Tricks</Text>
          </Box>
        </Link>
      </HStack>
      {data.map((problemData, index) => (
        <SmoothCollapse key={index} expanded={currentVisible[index]}>
          <Box className="mt-10 flex justify-center">
            <table className="table-auto">
              <tbody>{problemData}</tbody>
            </table>
          </Box>
        </SmoothCollapse>
      ))}
    </VStack>
  );
};
