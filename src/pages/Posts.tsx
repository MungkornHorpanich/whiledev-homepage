import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MarkdownRenderer from "../components/MarkdownRenderer";

const Posts: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // Fetch the markdown file (assuming it's in the public folder)
    fetch("/posts/firstpost.md") // Adjust path as needed
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, []);

  return (
    <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)]  bg-white h-[10000px]">
      <Navbar />
      <div className="pt-24 text-black dark:text-white">
        <MarkdownRenderer markdown={content} />
      </div>
    </div>
  );
};

export default Posts;
