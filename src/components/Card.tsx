import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  description: string;
  style?: string;
  path: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  path,
  style,
}) => {
  return (
    <div>
      <div className={`px-5 md:px-0 flex flex-col ${style}`}>
        <Link to={`/posts/${path}`}>
          <img
            src={image}
            className="rounded-xl md:hover:scale-105 w-full transition duration-300 ease-in-out cursor-pointer"
            alt="hello"
          />
        </Link>
        <Link
          to={"/posts/react-tutorial"}
          className="text-lg md:text-2xl pt-3 font-semibold px-3"
        >
          {title}
        </Link>
        <p className="px-3 text-md dark:text-gray-200 text-gray-700 tracking-tight pt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
