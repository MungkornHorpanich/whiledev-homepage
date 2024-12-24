import React from "react";

interface TechProps {
  fileUrl: string;
  bgColor: string;
  catergory: string[];
  name: string;
}

const Tech: React.FC<TechProps> = ({ fileUrl, bgColor, catergory, name }) => {
  return (
    <div>
      <div className="flex p-3 rounded-2xl border border-gray-200 dark:border-[#2e2e2e]">
        <img
          src={fileUrl}
          alt="tailwind logo"
          className={`w-14 p-3 rounded-xl ${bgColor}`}
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-medium ml-2">{name}</h1>
          <div className="ml-2 flex gap-1">
            {catergory.map((ctgry, index) => (
              <div
                key={index}
                className="text-[12px] py-[1px] px-2 bg-green-300 dark:bg-green-300 text-black rounded-lg"
              >
                {ctgry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
