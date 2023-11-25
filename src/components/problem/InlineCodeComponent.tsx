import { memo } from "react";

interface InlineCodeComponent {
  content: {
    content: string;
  };
}

const InlineCodeComponent = ({ content }: InlineCodeComponent) => (
  <div className="px-1 py-0.5 inline-code bg-slate-700 rounded-md">
    <code>{content.content}</code>
  </div>
);

export default memo(InlineCodeComponent);
