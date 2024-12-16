import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { HiMenu, HiSun, HiMoon } from "react-icons/hi";
import useTheme from "../hooks/useTheme";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full z-20 fixed dark:bg-[#202023] bg-white md:py-[5px] dark:text-white text-black mx-auto">
      <div className="mx-auto max-w-3xl">
        <div className="text-white flex justify-between flex-row md:m-0 p-4 md:p-1 md:pl-5 gap-3">
          <div className="flex flex-row">
            <Link to={"/"}>
              <div className="flex text-xl justify-center h-full items-center text-center font-semibold font-sans tracking-wide dark:text-gray-200 text-black">
                whiledev.
              </div>
            </Link>
            <div className="ml-8 gap-4 text-black dark:text-white hidden md:flex">
              <Link to={"/work"}>
                <div className="flex text-md hover:underline p-1 h-full items-center px-2">
                  Works
                </div>
              </Link>
              <Link to={"/posts"}>
                <div className="flex text-md hover:underline p-1 h-full items-center px-2">
                  Posts
                </div>
              </Link>
              <a
                href="https://whilebio.vercel.app/"
                className="flex text-md hover:underline p-1 h-full items-center px-2 "
              >
                Contact
              </a>
              <a href="https://github.com/MungkornHorpanich/whiledev-homepage">
                <div className="flex text-md hover:underline gap-1 p-1 h-full items-center px-2 ">
                  <FaGithub size={18} className="h-full" /> Source
                </div>
              </a>
            </div>
          </div>

          {/* The burger menu */}
          <div className="flex gap-2">
            <div className="h-full md:pr-4">
              <button
                onClick={toggleTheme}
                className="border flex mx-auto justify-center text-black dark:text-white text-2xl md:text-xl md:p-2 h-full text-center p-1 dark:text-white/60 dark:border-gray-700 rounded-md"
              >
                {theme === "light" ? <HiMoon /> : <HiSun />}
              </button>
            </div>

            <Popover className="md:hidden">
              <PopoverButton className="flex border dark:border-gray-700 p-1 rounded-lg text-2xl items-center mx-auto text-center dark:text-white/50 text-black focus:outline-none ">
                <HiMenu />
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y mt-3 z-20 w-[250px] divide-white/5 rounded-xl dark:bg-[#202023] bg-white border dark:border-gray-700 border-gray-200 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3 text-black">
                  <Link
                    className="block rounded-lg py-2 px-3 transition dark:hover:bg-white/5 hover:bg-black/5"
                    to={"/work"}
                  >
                    <p className="font-semibold dark:text-white">Works</p>
                    <p className="dark:text-white/50">Projects I've created</p>
                  </Link>
                  <Link
                    to="/posts"
                    className="block rounded-lg py-2 px-3 transition dark:hover:bg-white/5 hover:bg-black/5"
                  >
                    <p className="font-semibold dark:text-white">Posts</p>
                    <p className="dark:text-white/50">
                      Coding posts and tutorial
                    </p>
                  </Link>
                  <a
                    className="block rounded-lg py-2 px-3 transition dark:hover:bg-white/5 hover:bg-black/5"
                    href="https://whilebio.vercel.app/"
                  >
                    <p className="font-semibold dark:text-white">Contacts</p>
                    <p className="dark:text-white/50">
                      My social media accounts
                    </p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition dark:hover:bg-white/5 hover:bg-black/5"
                    href="https://github.com/MungkornHorpanich/whiledev-homepage"
                  >
                    <p className="font-semibold dark:text-white gap-1 flex item-center">
                      <FaGithub size={22} className="h-full" /> Source
                    </p>
                    <p className="dark:text-white/50">Source of this project</p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
