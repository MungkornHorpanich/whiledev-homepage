import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)]  bg-white h-[10000px]">
      <Navbar />

      <div className="pt-24 max-w-2xl xl:max-w-3xl mx-auto px-5 text-black dark:text-white">
        <div className="mt-5 text-lg">
          Hi, I’m Mungkorn, a coder from Thailand who loves turning ideas into
          reality with code.
          <br />
          <br />
          In this space, I’ll be sharing my projects, insights, and experiences
          from my programming journey.
          <br />
          <br />
          Stay tuned and explore with me!
          <br />
        </div>

        <div className="text-black text-center dark:text-white mt-10 dark:bg-[#2e2e2e] px-4 mx-auto text-md md:text-lg bg-gray-100 py-2 md:py-4  md:font-medium rounded-lg p-1 transition duration-600 ease-in-out [--anchor-gap:var(--spacing-5)] ">
          Hello, I'm an indie app developer based in Thailand!
        </div>

        <div className="mt-12 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium">My Contents</h1>
          <div className="md:grid md:grid-cols-3 flex flex-col ">
            <Link to={"/posts"}>
              <div className="flex flex-col md:mx-2 my-2 mt-4 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-gray-700 border-gray-200 border rounded-lg">
                <h1 className="text-center font-medium">Posts</h1>
                <h1 className="text-center font-bold">69</h1>
                <h1 className="text-center text-[14px] text-gray-400 font-thin">
                  บทความ
                </h1>
              </div>
            </Link>
            <a href="https://www.youtube.com/@WhileDev77">
              <div className="flex flex-col md:mx-2 my-2 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-gray-700 border-gray-200 border rounded-lg">
                <h1 className="text-center font-medium">Videos</h1>
                <h1 className="text-center font-bold">1</h1>
                <h1 className="text-center text-[14px] text-gray-400 font-thin">
                  วิดีโอ
                </h1>
              </div>
            </a>
            <a href="">
              <div className="flex flex-col md:mx-2 my-2 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-gray-700 border-gray-200 border rounded-lg">
                <h1 className="text-center font-medium">Projects</h1>
                <h1 className="text-center font-bold">30</h1>
                <h1 className="text-center text-[14px] text-gray-400 font-thin">
                  โปรเจค
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
