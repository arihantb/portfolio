import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Params, useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import { leetcodeData } from "../../common";
import { setHeaders, setMarkdown, setSections } from "./problemSlice";
import "katex/dist/katex.min.css";
import Markdown from "react-markdown";
import { url } from "inspector";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import "github-markdown-css";
import _ from "lodash";
import { Buffer } from "buffer";
import CodeComponent from "../../CodeComponent";
import InlineCodeComponent from "./InlineCodeComponent";
import { Box, HStack, Skeleton, Text, VStack } from "@chakra-ui/react";

const markdownParser = async (
  markdown: string
): Promise<
  [
    {
      title: string | undefined;
      difficulty: string | undefined;
      tags: string[] | undefined;
    },
    {
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
    }[]
  ]
> => {
  const contentSplitRegex =
    /\$\$([\s\S]*?)\$\$|\$([\s\S]*?)\$|```([\s\S]*?)```|`([\s\S]*?)`|!\[\[([\s\S]*?)\]\]|([^$`]+)/gm;
  const paragraphSplitRegex = /(?!\n)[\s\S]*?(?=\n\s*-|\n\n|$)/g;
  const sectionSplitRegex = /(##\s*(.*?))\s*\n((?:.*\n*)*?)(?=(?:##|$))/gm;
  const yamlSplitRegex = /---([\s\S]*?)---/gm;
  const titleSplitRegex = /(?<=title:\s+)(.*)?(?=\n)/gm;
  const difficultySplitRegex = /(?<=difficulty:\s+)(.*)?(?=\n)/gm;
  const tagsSplitRegex = /(?<=tags:\n(?:\s*-.*\n)*\s*-\s+)([^\n]*)/gm;
  const codeLanguageSplitRegex = /^[\S]+(?=\n)/gm;
  const sections = [];

  const yaml = markdown.match(yamlSplitRegex)?.[0];
  const title = yaml?.match(titleSplitRegex)?.[0];
  const difficulty = yaml?.match(difficultySplitRegex)?.[0];
  const tags = yaml?.match(tagsSplitRegex)?.map((tag) => tag.toString());
  const headers = { title, difficulty, tags };

  for (const match of [...markdown.matchAll(sectionSplitRegex)]) {
    const heading = match[1];
    const content = match[3];
    const paragraphs = [];

    if (content && !heading.includes("Code")) {
      for (const match of [...content.matchAll(paragraphSplitRegex)]) {
        const paragraph = match[0];
        const contents = [];
        let match_;

        if (paragraph) {
          while ((match_ = contentSplitRegex.exec(paragraph)) !== null) {
            if (match_[1]) {
              contents.push({
                type: "latex",
                content: match_[1],
                isMultiline: true,
              });
            } else if (match_[2]) {
              contents.push({
                type: "latex",
                content: match_[2],
                isMultiline: false,
              });
            } else if (match_[4]) {
              contents.push({
                type: "code",
                content: match_[4],
                isMultiline: false,
              });
            } else if (match_[5]) {
              contents.push({
                type: "image",
                content: await getImageDataFromGitHub(match_[5]),
                isMultiline: false,
              });
            } else if (match_[6]) {
              contents.push({
                type: "markdown",
                content: match_[6].replace(/^\s|\s$/gm, "&nbsp;"),
                isMultiline: true,
              });
            }
          }
        }

        if (!_.isEmpty(contents)) paragraphs.push(contents);
      }
    } else if (content) {
      const contents = [];
      let match_;

      while ((match_ = contentSplitRegex.exec(content)) !== null) {
        if (match_[3]) {
          const language = match_[3].match(codeLanguageSplitRegex)?.[0];
          const code = match_[3]
            .replace(codeLanguageSplitRegex, "")
            .trimStart();
          contents.push({
            type: "code",
            content: { language, code },
            isMultiline: true,
          });
        }
      }

      if (!_.isEmpty(contents)) paragraphs.push(contents);
    }

    sections.push({ heading, paragraphs });
  }

  return [headers, sections];
};

const getMarkdownFromGitHub = async (fileName: string) =>
  await fetch(
    `https://api.github.com/repos/arihantb/notes/contents/Study/Leetcode/Leetcode%20Solutions/${fileName}`,
    {
      headers: {
        Authorization: "Bearer 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",
      },
    }
  )
    .then((response) => response.text())
    .then((text) =>
      Buffer.from(JSON.parse(text).content, "base64").toString("utf-8")
    );

const getImageDataFromGitHub = async (imageName: string) =>
  await fetch(
    `https://api.github.com/repos/arihantb/notes/contents/Assets/Study/Leetcode/${imageName}`,
    {
      headers: {
        Authorization: "Bearer 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",
      },
    }
  )
    .then((response) => response.text())
    .then((text) => JSON.parse(text).content);

export const Problem = () => {
  const headers = useSelector((state: RootState) => state.problemSlice.headers);
  const markdown = useSelector(
    (state: RootState) => state.problemSlice.markdown
  );
  const sections = useSelector(
    (state: RootState) => state.problemSlice.sections
  );
  const dispatch = useDispatch();

  const { id } = useParams<Params>() as Params;
  const problem = id
    ? leetcodeData[parseInt(id) - 1]
    : { number: 0, title: "" };

  useEffect(() => {
    getMarkdownFromGitHub(
      encodeURI(`${problem.number}. ${problem.title}.md`)
    ).then((text) => dispatch(setMarkdown(text)));
  });

  useEffect(() => {
    if (markdown) {
      markdownParser(markdown).then(([headers, sections]) => {
        dispatch(setHeaders(headers));
        dispatch(setSections(sections));
      });
    }
  }, [markdown]);

  return (
    <VStack px={80} py={10} justifyContent="center" alignItems="normal">
      <VStack gap={4} alignItems="normal">
        <Skeleton isLoaded={headers !== null}>
          <Text fontSize={40} fontWeight="bold">{`${
            problem.number
          }. ${_.startCase(headers?.title)}`}</Text>
        </Skeleton>
        <Skeleton isLoaded={headers !== null}>
          <Box display="flex">
            <Text
              p={2}
              fontSize="lg"
              fontWeight="bold"
              bgColor={`${
                headers?.difficulty === "easy"
                  ? "green.500"
                  : headers?.difficulty === "medium"
                  ? "yellow.500"
                  : "red.500"
              }`}
              textColor={`${
                headers?.difficulty === "easy"
                  ? "green.800"
                  : headers?.difficulty === "medium"
                  ? "yellow.800"
                  : "red.800"
              }`}
            >
              {headers?.difficulty?.toUpperCase()}
            </Text>
          </Box>
        </Skeleton>
        <Skeleton isLoaded={headers !== null}>
          <HStack>
            {headers?.tags?.map((tag) => (
              <Text
                px={2}
                py={1}
                fontSize="lg"
                borderRadius="md"
                bgColor="gray.900"
                textColor="blue.500"
              >
                {tag}
              </Text>
            ))}
          </HStack>
        </Skeleton>
      </VStack>
      <Skeleton isLoaded={sections !== null}>
        {sections?.map((section, sectionIndex) => (
          <Box mt={10} key={sectionIndex}>
            <Box className="markdown-body">
              <Markdown>{section.heading}</Markdown>
            </Box>
            {section.paragraphs.map((paragraph) => (
              <Box display="flex" flexWrap="wrap" alignItems="center">
                {paragraph.map((content, contentIndex) => {
                  if (content.type === "latex") {
                    return content.isMultiline ? (
                      <Box flexBasis="100%">
                        <BlockMath key={contentIndex}>
                          {content.content}
                        </BlockMath>
                      </Box>
                    ) : (
                      <InlineMath key={contentIndex}>
                        {content.content}
                      </InlineMath>
                    );
                  } else if (content.type === "code") {
                    return content.isMultiline ? (
                      <CodeComponent key={contentIndex} content={content} />
                    ) : (
                      <InlineCodeComponent
                        key={contentIndex}
                        content={content}
                      />
                    );
                  } else if (content.type === "image") {
                    return (
                      <Box
                        display="flex"
                        flex="auto"
                        my={8}
                        justifyContent="center"
                      >
                        <img
                          key={contentIndex}
                          src={`data:image/png;base64,${content.content}`}
                        />
                      </Box>
                    );
                  } else if (content.type === "markdown") {
                    return (
                      <Box key={contentIndex} className="markdown-body">
                        <Markdown>{content.content}</Markdown>
                      </Box>
                    );
                  }
                })}
              </Box>
            ))}
          </Box>
        ))}
      </Skeleton>
    </VStack>
  );
};
