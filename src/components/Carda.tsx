import React from "react";

interface CardProps {
  image: string;
  title: string;
  description?: string;
  path: string;
  tech: string[];
}

const Carda: React.FC<CardProps> = ({
  image,
  title,
  description,
  path,
  tech,
}) => {
  return (
    <div className="p-5 border border-gray-200 dark:border-[#2e2e2e] rounded-xl">
      <div className="flex flex-col justify-between h-full">
        <div className="md:px-0 flex flex-col ">
          <a href={path}>
            <img
              src={image}
              className="rounded-xl md:hover:scale-105 h-52 w-full transition duration-300 ease-in-out cursor-pointer object-cover"
              alt="hello"
            />
          </a>
          <a href={path} className="text-lg md:text-xl pt-2 font-semibold px-3">
            {title}
          </a>
          <p className="px-3 text-sm md:text-md dark:text-gray-200 text-gray-700 tracking-tight pt-1">
            {description}
          </p>
        </div>
        <div className="mt-2">
          <div className="flex flex-wrap gap-1 ml-2">
            {tech.map((technology, index) => (
              <div
                key={index}
                className="text-[10px] p-[3px] px-2 mt-2 bg-gray-200 dark:bg-[#2e2e2e] text-black dark:text-white rounded-xl"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carda;
