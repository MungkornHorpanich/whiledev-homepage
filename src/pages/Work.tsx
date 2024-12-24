import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Carda from "../components/Carda";
import edgegambit from "../../public/edgambit.png";

const Work: React.FC = () => {
  return (
    <div className="dark:bg-[#202023] transition text-black dark:text-white duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] min-h-screen bg-white ">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-20">
        <Link to={"/work"} className="flex px-5 gap-2 hover:underline">
          <h1 className="text-xl md:text-2xl font-medium">Works</h1>
        </Link>
        <div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2 md:px-3 md:py-2">
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
      <Footer />
    </div>
  );
};

export default Work;