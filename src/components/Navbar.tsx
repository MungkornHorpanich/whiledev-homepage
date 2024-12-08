import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-[#202023] mx-auto backdrop-blur-md mt-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-white flex flex-row ml-5 md:m-0 p-3 pl-4 gap-3">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-20 h-20 rounded-3xl " />
          </Link>
          <div className="hidden">
            <div className="flex text-2xl text-center font-bold tracking-wide font-mono text-gray-200">
              whiledev.
            </div>
            <ul className="flex text-center text-lg ">
              <li>hello</li>
              <li>xd</li>
            </ul>
          </div>

          {/* The burger menu */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
