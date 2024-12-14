import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Posts: React.FC = () => {
  return (
    <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)]  bg-white h-[10000px]">
      <Navbar />
      <div className="pt-24 px-5 text-xl text-black dark:text-white max-w-2xl mx-auto md:max-w-3xl">
        <h1>Post</h1>
        <Link to={"/posts/react-tutorial"}>React-Tutorial</Link>
      </div>
    </div>
  );
};

export default Posts;
