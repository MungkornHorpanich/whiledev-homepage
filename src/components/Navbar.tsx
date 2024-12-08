import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="w-screen mx-auto fixed backdrop-blur-md">
      <div className="mx-auto max-w-3xl">
        <div className="text-white flex flex-row p-3 pl-4">
          <Link to={"/"}>
            <div className="flex">
              <div className="flex text-lg text-center font-semibold">
                WhileDev
              </div>
            </div>
          </Link>
          <ul className="flex text-center text-lg pl-12">
            <li>hello</li>
            <li>xd</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
