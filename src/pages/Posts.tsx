import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Markdown from "markdown-to-jsx";

const Posts: React.FC = () => {
  const markdown = `# Hello, Markdown!
  ## Lists

  ### Ordered List
 1. Item 1
 2. Item 2
 3. Item 3

 ### Unordered List
 - Bullet 1
 - Bullet 2
   - Sub-bullet A
   - Sub-bullet B
 - Bullet 3`;

  return (
    <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)]  bg-white h-[10000px]">
      <Navbar />
      <div className="pt-24 px-5 text-xl text-black dark:text-white max-w-2xl mx-auto md:max-w-3xl">
        <Markdown className="prose">{markdown}</Markdown>
      </div>
    </div>
  );
};

export default Posts;
