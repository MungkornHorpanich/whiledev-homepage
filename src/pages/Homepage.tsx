import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import avatar from "../../public/avatartion.png";
import edgegambit from "../../public/edgambit.png";
import reacttutorial from "../../public/images.jpeg";

const Homepage: React.FC = () => {
  return (
    <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)]  bg-white h-[10000px]">
      <Navbar />

      <div className="pt-24 max-w-3xl mx-auto px-5 text-black dark:text-white">
        <div className="md:flex gap-7">
          <img
            src={avatar}
            alt="avatar"
            className="border border-gray-200 dark:border-gray-700 rounded-2xl w-56 mx-auto my-5 md:mb-5 mb-10"
          />

          <div className="mt-5 text-lg font-semibold">
            Hi, I’m Mungkorn, a coder from Thailand who loves turning ideas into
            reality with code.
            <br />
            <br />
            In this space, I’ll be sharing my projects, insights, and
            experiences from my programming journey.
            <br />
            <br />
            Stay tuned and explore with me!
            <br />
          </div>
        </div>

        <div className="text-black text-center dark:text-white mt-10 dark:bg-[#2e2e2e] px-4 mx-auto text-md md:text-lg bg-gray-100 py-2 md:py-4  md:font-medium rounded-lg p-1 transition duration-600 ease-in-out [--anchor-gap:var(--spacing-5)] ">
          💻 Hello, I'm an indie app developer based in Thailand!
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

        <div className="mt-12 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium">Works</h1>
          <div className="grid grid-cols-1 mt-4 md:grid-cols-2 md:px-3 md:py-2 mx-auto ">
            <div className="px-5 md:px-0 flex flex-col">
              <a href="https://edgegambit.vercel.app/">
                <img
                  src={edgegambit}
                  className="rounded-xl md:hover:scale-105 w-full transition duration-300 ease-in-out cursor-pointer"
                  alt="hello"
                />
              </a>
              <a href="https://edgegambit.vercel.app/">
                <h1 className="md:text-2xl text-xl pt-3 font-semibold px-3">
                  EdgeGambit
                </h1>
              </a>
              <p className="px-3 text-lg dark:text-gray-200 text-gray-700 tracking-tight pt-1">
                New concept of Trading Competitions, A trading competitions
                platform.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium">Post</h1>
          <div className="grid grid-cols-1 mt-4 md:grid-cols-2 md:px-3 md:py-2 mx-auto ">
            <div className="px-5 md:px-0 flex flex-col">
              <Link to={"/posts/react-tutorial"}>
                <img
                  src={reacttutorial}
                  className="rounded-xl md:hover:scale-105 w-full transition duration-300 ease-in-out cursor-pointer"
                  alt="hello"
                />
              </Link>
              <h1 className="text-xl md:text-2xl pt-3 font-semibold px-3">
                React + Typescritp Tutorial
              </h1>
              <p className="px-3 text-lg dark:text-gray-200 text-gray-700 tracking-tight pt-1">
                A simple and easy step by step React with Typescirpt tutorial
                with examples.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
