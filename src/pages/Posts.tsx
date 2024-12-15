import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Posts: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] bg-white">
      <Navbar />
      <div className="pt-24 px-5 text-xl text-black dark:text-white max-w-2xl mx-auto md:max-w-3xl">
        <h1>Post</h1>
        <Link to={"/posts/react-tutorial"}>React-Tutorial</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Posts;
