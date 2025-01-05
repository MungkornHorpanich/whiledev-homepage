import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import avatar from "../../public/avatartion.png";
import edgegambit from "../../public/edgambit.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carda from "../components/Carda";
import NextApollo from "../../public/next-apollo.png";
import ChatBubble from "../../public/chat-bubble.png";
import Technologies from "../components/Technologies";
import MacOS from "../../public/macOS.png";

const Homepage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-[#202023] min-h-screen transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] bg-white">
      <Navbar />

      {/* Avatar and bio */}
      <div className="pt-20 max-w-4xl mx-auto px-5 text-black dark:text-white">
        <div className="md:flex gap-7">
          <img
            src={avatar}
            alt="avatar"
            className="border border-gray-200 dark:border-gray-700 rounded-2xl w-52 mx-auto my-5 md:mb-5 mb-8"
          />

          <div className="mt-5 md:text-[18px] text-md flex flex-col gap-3">
            <div className="md:pt-2">
              Hi, I’m Mungkorn. I’m 14 years old developer and I love coding.
            </div>
            <div>
              {" "}
              I enjoy building projects, learning new technologies, and solving
              problems.
            </div>
            <div>
              This website is a place to share what I’m working on and what I’ve
              learned along the way. Thanks for stopping by!
            </div>
            <div className="flex gap-1 cursor-pointer dark:text-blue-300 text-blue-500">
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

        {/* Technologies */}
        {/* I saw a portfolio from https://andrijaweb.vercel.app/ and I think his technology icons are cool so i copy it */}
        <div className="mt-12 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium">Technologies</h1>
          <Technologies />
        </div>

        {/* My Contents */}
        <div className="mt-12 flex flex-col">
          <div className="flex gap-2">
            <h1 className="text-xl md:text-2xl font-medium">My Contents</h1>
          </div>
          <div className="md:grid md:grid-cols-3 flex flex-col ">
            <Link to={"/posts"}>
              <div className="flex flex-col md:mx-2 my-2 mt-4 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-[#2e2e2e] border-gray-200 border rounded-lg">
                <h1 className="text-center font-medium">Posts</h1>
                <h1 className="text-center font-bold">2</h1>
                <h1 className="text-center text-[14px] text-gray-400 font-thin">
                  บทความ
                </h1>
              </div>
            </Link>
            <a href="https://www.youtube.com/@WhileDev77">
              <div className="flex flex-col md:mx-2 my-2 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-[#2e2e2e] border-gray-200 border rounded-lg">
                <h1 className="text-center font-medium">Videos</h1>
                <h1 className="text-center font-bold">8</h1>
                <h1 className="text-center text-[14px] text-gray-400 font-thin">
                  วิดีโอ
                </h1>
              </div>
            </a>
            <a href="https://github.com/MungkornHorpanich?tab=repositories">
              <div className="flex flex-col md:mx-2 my-2 hover:shadow-sm hover:shadow-gray-400 hover:translate-y-[-5px] py-6 md:m-5 dark:border-[#2e2e2e] border-gray-200 border rounded-lg">
                <h1 className="text-center font-medium">Projects</h1>
                <h1 className="text-center font-bold">23</h1>
                <h1 className="text-center text-[14px] text-gray-400 font-thin">
                  โปรเจค
                </h1>
              </div>
            </a>
          </div>
        </div>

        {/* Works */}
        <div className="mt-12 flex flex-col">
          <Link to={"/work"} className="flex gap-2 hover:underline">
            <h1 className="text-xl md:text-2xl font-medium">Works</h1>
          </Link>
          <div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2 md:px-3 md:py-2">
            <Carda
              image={edgegambit}
              title="EdgeGambit"
              description="New concept of Trading Competitions, A trading competitions platform."
              path="https://edgegambit.vercel.app/"
              tech={[
                "typescirpt",
                "react",
                "tailwindcss",
                "express",
                "mongodb",
              ]}
            />
            <Carda
              image={ChatBubble}
              title="Chat-Bubble Effect"
              description="Simple Chat-Bubble effect app"
              path="https://whiledev-chat-bubble.vercel.app/"
              tech={["typescirpt", "react", "tailwindcss", "framer-motion"]}
            />
          </div>

          <Link to={"/work"}>
            <h1 className="font-medium flex py-3 mx-0 mt-3 md:mt-0 md:mx-3 rounded-xl border border-gray-200 dark:border-[#2e2e2e] px-5 ">
              <p>More work.</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </h1>
          </Link>
        </div>

        {/* Posts */}
        <div className="mt-12 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium">Posts</h1>
          <div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2 md:px-3 md:py-2">
            <Card
              image={NextApollo}
              title="Why GraphQL with Apollo Server Feels Like Overkill for Smaller SaaS Projects and Next.js is better for SaaS."
              description="In this post I'm covering why I switched from GraphQL, Apollo Server with TypeORM to Next. js with Prisma"
              path="next-vs-apollo"
              catergory={[
                "react",
                "next.js",
                "typescript",
                "graphql",
                "apollo-server",
                "prisma",
                "typeorm",
              ]}
            />

            <Card
              image={MacOS}
              title="The Ultimate macOS Workflow for Power Users: My Tools and Setup"
              description="Switching from Yabai to Aerospace has transformed my macOS workflow. In this post, I explain how Aerospace, combined with Ghostty Terminal, Tmux, and SketchyBar, creates a powerful and efficient setup for maximizing productivity."
              path="macos-workflow"
              catergory={[
                "macOS",
                "window management",
                "productivity",
                "aerospace",
                "terminal",
                "tmux",
                "sketchybar",
                "ghostty",
              ]}
            />
          </div>
          <Link to={"/posts"}>
            <h1 className="font-medium flex py-3 mx-0 mt-3 md:mt-0 md:mx-3 rounded-xl border border-gray-200 dark:border-[#2e2e2e] px-5 ">
              <p>More post.</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </h1>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
