import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  path: string;
}

const Carda: React.FC<CardProps> = ({ image, title, description, path }) => {
  return (
    <div>
      <div className="px-5 md:px-0 flex flex-col">
        <a href={path}>
          <img
            src={image}
            className="rounded-xl md:hover:scale-105 w-full transition duration-300 ease-in-out cursor-pointer"
            alt="hello"
          />
        </a>
        <a href={path} className="text-lg md:text-2xl pt-3 font-semibold px-3">
          {title}
        </a>
        <p className="px-3 text-md dark:text-gray-200 text-gray-700 tracking-tight pt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Carda;
