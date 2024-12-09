import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { HiMenu, HiSun, HiMoon } from "react-icons/hi";
import useTheme from "../hooks/useTheme";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full fixed dark:bg-[#202023] dark:text-white text-black mx-auto backdrop-blur-md">
      <div className="mx-auto max-w-3xl">
        <div className="text-white flex justify-between flex-row md:m-0 p-4 md:p-1 pl-7 md:pl-5 gap-3">
          <Link to={"/"}>
            <div className="flex text-lg md:text-xl justify-center h-full items-center text-center font-semibold font-sans tracking-wide dark:text-gray-200 text-black">
              whiledev.
            </div>
          </Link>

          {/* The burger menu */}
          <div className="flex gap-2">
            <button
              onClick={toggleTheme}
              className="border flex md:p-2 my-[3px] text-2xl p-1 text-black dark:text-white dark:border-gray-700 rounded-md"
            >
              {theme === "light" ? <HiMoon size={23} /> : <HiSun size={23} />}
            </button>

            <Popover className="md:hidden">
              <PopoverButton className="flex border dark:border-gray-700 p-1 mt-[3px] rounded-lg text-2xl items-center mx-auto text-center dark:text-white/50 text-black focus:outline-none ">
                <HiMenu />
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y mt-3 w-[250px] divide-white/5 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-gray-700 border-gray-200 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3 text-black">
                  <a
                    className="block rounded-lg py-2 px-3 transition dark:hover:bg-white/5 hover:bg-black/5"
                    href="#"
                  >
                    <p className="font-semibold dark:text-white">Works</p>
                    <p className="dark:text-white/50">Projects I've created</p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition dark:hover:bg-white/5 hover:bg-black/5"
                    href="#"
                  >
                    <p className="font-semibold dark:text-white">Posts</p>
                    <p className="dark:text-white/50">
                      Coding posts and tutorial
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition dark:hover:bg-white/5 hover:bg-black/5"
                    href="#"
                  >
                    <p className="font-semibold dark:text-white">Reports</p>
                    <p className="dark:text-white/50">
                      Keep track of your growth
                    </p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition dark:hover:bg-white/5 hover:bg-black/5"
                    href="#"
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
