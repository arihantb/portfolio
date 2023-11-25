import { useDispatch, useSelector } from "react-redux";
import SmoothCollapse from "react-smooth-collapse";
import { RootState } from "../../../app/store";
import { setAboutVisibility } from "./aboutSlice";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

const AboutMeContent = () => {
  return (
    <VStack gap={8}>
      <HStack gap={8}>
        <Box w="full" h="full" display="flex">
          <Image fit="contain" src="https://via.placeholder.com/150x150" />
        </Box>
        <Text w="full" fontSize={18} textAlign="justify">
          I'm an accomplished professional with a talent for turning project
          ideas into successful products. I'm your go-to guy for project
          planning and execution, having hands-on experience in both traditional
          programming and cutting-edge AI technologies. I pride myself on being
          versatile, from optimizing old-school applications to smoothly sailing
          through cloud solutions.
        </Text>
      </HStack>
      <Text fontSize={18} textAlign="justify">
        So, what sets me apart? It's my client-focused approach. I'm a pro at
        onboarding clients, diving deep into their needs, and seamlessly
        blending them into the project workflow. This isn't just about building
        solid client relationships — it's about crafting tailored solutions that
        go above and beyond expectations.
      </Text>
      <Text fontSize={18} textAlign="justify">
        In a nutshell, I'm a mix of strategic project management, tech wizardry,
        and a dedication to client satisfaction. With my proven ability to
        navigate through various tech landscapes, I'm the forward-thinking
        professional ready to make a real impact.
      </Text>
    </VStack>
  );
};

export const About = () => {
  const isAboutVisible = useSelector(
    (state: RootState) => state.aboutSlice.isAboutVisible
  );
  const dispatch = useDispatch();

  return (
    <VStack>
      <Text fontSize="3xl" fontWeight="bold" textColor="brown.600">
        About Me
      </Text>
      <HStack gap={0}>
        <Box
          cursor="pointer"
          className="flip-text text-sm xs:text-xl md:text-2xl"
          data-replace={isAboutVisible ? "Hide" : "Show"}
          onClick={() => dispatch(setAboutVisibility(!isAboutVisible))}
        >
          <Text textColor="blue.500">{isAboutVisible ? "Hide" : "Show"}</Text>
        </Box>
        <Text className="text-stone-500 dark:text-gray-400 text-sm xs:text-xl md:text-2xl duration-200">
          &nbsp;about me
        </Text>
      </HStack>
      <SmoothCollapse expanded={isAboutVisible}>
        <Box className="mt-10 max-w-2xl flex justify-center">
          <AboutMeContent />
        </Box>
      </SmoothCollapse>
    </VStack>
  );
};
