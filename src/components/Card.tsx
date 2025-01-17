import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  description: string;
  style?: string;
  path: string;
  catergory: string[];
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  path,
  style,
  catergory,
}) => {
  return (
    <div className="p-5 border border-gray-200 flex flex-col dark:border-[#2e2e2e] rounded-xl">
      <div className="flex-col flex justify-between h-full">
        <div className="flex flex-col">
          <div className={`md:px-0 flex flex-col ${style}`}>
            <Link to={`/posts/${path}`}>
              <img
                src={image}
                className="rounded-xl object-cover md:hover:scale-105 w-full h-52 transition duration-300 ease-in-out cursor-pointer"
                alt="hello"
              />
            </Link>
          </div>
          <Link
            to={`/posts/${path}`}
            className="text-lg md:text-xl pt-2 font-semibold px-3"
          >
            {title}
          </Link>
          <p className="px-3 text-sm dark:text-gray-200 text-gray-700 tracking-tight pt-1">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex flex-wrap gap-1 ml-2">
          {catergory.map((ctgry, index) => (
            <div
              key={index}
              className="text-[10px] p-[3px] px-2 mt-2 bg-gray-200 dark:bg-[#2e2e2e] text-black dark:text-white rounded-xl"
            >
              {ctgry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
