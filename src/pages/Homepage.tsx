import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import avatar from "../../public/avatartion.png";
import edgegambit from "../../public/edgambit.png";
import reacttutorial from "../../public/images.jpeg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carda from "../components/Carda";

const Homepage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] bg-white h-full">
      <Navbar />

      <div className="pt-20 max-w-3xl mx-auto px-5 text-black dark:text-white">
        <div className="md:flex gap-7">
          <img
            src={avatar}
            alt="avatar"
            className="border border-gray-200 dark:border-gray-700 rounded-2xl w-52 mx-auto my-5 md:mb-5 mb-8"
          />

          <div className="mt-5 md:text-[17px] text-md flex flex-col gap-3">
            <div>Hi, I’m Mungkorn. I’m 14 years old and I love coding.</div>
            <div>
              {" "}
              I enjoy building projects, learning new technologies, and solving
              problems.
            </div>
            <div>
              This website is a place to share what I’m working on and what I’ve
              learned along the way. Thanks for stopping by!
            </div>
            <div className="flex gap-1 text-blue-800 cursor-pointer dark:text-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p> Chonburi, Thailand</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium">Technologies</h1>
        </div>

        <div className="mt-12 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium">My Contents</h1>
          <div className="md:grid md:grid-cols-3 flex flex-col ">
            <Link to={"/posts"}>
              <div className="flex flex-col md:mx-2 my-2 mt-4 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-[#2e2e2e] border-gray-200 border rounded-lg">
                <h1 className="text-center font-medium">Posts</h1>
                <h1 className="text-center font-bold">69</h1>
                <h1 className="text-center text-[14px] text-gray-400 font-thin">
                  บทความ
                </h1>
              </div>
            </Link>
            <a href="https://www.youtube.com/@WhileDev77">
              <div className="flex flex-col md:mx-2 my-2 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-[#2e2e2e] border-gray-200 border rounded-lg">
                <h1 className="text-center font-medium">Videos</h1>
                <h1 className="text-center font-bold">1</h1>
                <h1 className="text-center text-[14px] text-gray-400 font-thin">
                  วิดีโอ
                </h1>
              </div>
            </a>
            <a href="">
              <div className="flex flex-col md:mx-2 my-2 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-[#2e2e2e] border-gray-200 border rounded-lg">
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
          <div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2 md:px-3 md:py-2 mx-auto ">
            <Carda
              image={edgegambit}
              title="EdgeGambit"
              description="New concept of Trading Competitions, A trading competitions platform."
              path="https://edgegambit.vercel.app/"
              tech={["typescirpt", "react", "tailwindcss"]}
            />
            <Carda
              image={edgegambit}
              title="EdgeGambit"
              description="New concept of Trading Competitions, A trading competitions platform."
              path="https://edgegambit.vercel.app/"
              tech={["typescirpt", "react", "tailwindcss"]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium">Post</h1>
          <div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-2 md:px-3 md:py-2 mx-auto ">
            <Card
              image={reacttutorial}
              title="React + Typescritp Tutorial"
              description="A simple and easy step by step React with Typescirpt tutorial with examples."
              path="react-tutorial"
              catergory={["react", "web development", "typescript"]}
            />

            <Card
              image={reacttutorial}
              title="Example"
              description="Just basic example of using the custom components"
              path="react-tutorial"
              catergory={["react", "web development", "typescript"]}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
