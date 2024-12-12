import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../index.css";

interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
