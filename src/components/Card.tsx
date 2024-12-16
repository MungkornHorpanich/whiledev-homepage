import React, { useEffect, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="p-5 border border-gray-200 dark:border-[#2e2e2e] rounded-xl">
      <div className={`md:px-0 flex flex-col ${style}`}>
        <div
          className={`${
            !isLoaded ? "bg-gray-200" : ""
          } transition-all duration-300 `}
        >
          {!isLoaded && <p className="text-center text-gray-500"></p>}{" "}
          {/* Show loading message */}
          <Link to={`/posts/${path}`}>
            <img
              src={image}
              className="rounded-xl md:hover:scale-105 w-full transition duration-300 ease-in-out cursor-pointer"
              alt="hello"
              onLoad={handleLoad}
              onError={handleError}
            />
          </Link>
        </div>
        <Link
          to={"/posts/react-tutorial"}
          className="text-lg md:text-2xl pt-3 font-semibold px-3"
        >
          {title}
        </Link>
        <p className="px-3 text-md dark:text-gray-200 text-gray-700 tracking-tight pt-1">
          {description}
        </p>
        <div className="flex mt-2 gap-2 ml-2">
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
