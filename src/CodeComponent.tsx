import { memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkDark,
  coldarkCold,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import colors from "tailwindcss/colors";
import { CopyToClipboard } from "react-copy-to-clipboard";
import _ from "lodash";

interface CodeComponent {
  content: {
    content: {
      language: string;
      code: string;
    };
  };
  theme: string | null;
}

const CodeComponent = ({ content, theme }: CodeComponent) => (
  <div className="flex-1 overflow-auto">
    <div className="flex flex-1 px-3 py-2 rounded-tl-lg rounded-tr-lg items-center justify-between bg-slate-700">
      <span>{_.capitalize(content.content?.language)}</span>
      <CopyToClipboard text={content.content?.code}>
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faCopy}
          color={colors.slate[300]}
        />
      </CopyToClipboard>
    </div>
    <SyntaxHighlighter
      customStyle={{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
      language={content.content?.language}
      style={theme === "dark" ? coldarkDark : coldarkCold}
      showLineNumbers
    >
      {content.content?.code}
    </SyntaxHighlighter>
  </div>
);

export default memo(CodeComponent);
