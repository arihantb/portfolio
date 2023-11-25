import { title, subtitle, subSubtitle } from "../../../common/constants";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

/**
 * Renders a horizontal stack of `Text` components with animated characters.
 * Each character in the `text` prop is rendered as a separate `Text` component,
 * with a special animation applied to each character.
 *
 * @param {string} text - The text to be rendered.
 * @returns {JSX.Element} - A horizontal stack of `Text` components with animated characters.
 */
const TypeText = ({ text }: { text: string }): JSX.Element => (
  <HStack
    gap={0}
    justifyContent="center"
    className="xs:text-2xl sm:text-4xl lg:text-6xl text-2xl"
  >
    {[...text].map((char, index) =>
      char === " " ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <Text
          key={index}
          fontWeight="bold"
          animation={`textColorAnimation 200ms step-end both ${200 * index}ms`}
        >
          {char}
        </Text>
      )
    )}
  </HStack>
);

/**
 * Renders the given text as a series of animated characters.
 * Each character has a bold font weight and a color animation.
 * @param {string} text - The text to be rendered as animated characters.
 * @returns {JSX.Element} - JSX element that renders the text as animated characters.
 */
const FlipText = ({ text }: { text: string }): JSX.Element => (
  <HStack justifyContent="center">
    {text.split(" ").map((word, index) => (
      <Box display="flex" key={index} className="flip-text" data-replace={word}>
        <Text>{word}</Text>
      </Box>
    ))}
  </HStack>
);

/**
 * Renders the home page with a box containing a title, subtitle, and sub-subtitle.
 * @returns {JSX.Element} - JSX element representing the home page UI.
 */
export const Home = (): JSX.Element => (
  <VStack cursor="default" gap={8}>
    <Box id="title-text-animated" justifyContent="center">
      <TypeText text={title} />
    </Box>
    <Box mt={4}>
      <VStack className="text-stone-400 xs:text-2xl sm:text-4xl lg:text-5xl text-lg">
        <FlipText text={subtitle} />
        <FlipText text={subSubtitle} />
      </VStack>
    </Box>
  </VStack>
);
