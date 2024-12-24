import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps {
  children: string;
  language?: string;
}

const Code: React.FC<CodeProps> = ({ children, language }) => {
  const stringifiedContent = JSON.stringify(children);

  return (
    <SyntaxHighlighter style={gruvboxDark} language={language}>
      {stringifiedContent}
    </SyntaxHighlighter>
  );
};

export default Code;
