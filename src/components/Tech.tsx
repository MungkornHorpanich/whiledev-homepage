import React from "react";

const Tech: React.FC = () => {
  return (
    <div>
      <div className="flex p-3 rounded-2xl border border-gray-200 dark:border-[#2e2e2e]">
        <img
          src="https://andrijaweb.vercel.app/imgs/logos/typescript.svg"
          alt="tailwind logo"
          className="w-14 p-3 rounded-xl bg-[#3178c6]/20"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-medium ml-4">Typescript</h1>
          <div className="ml-4 flex gap-1">
            <div className="text-[12px] py-[1px] px-2 bg-green-300 dark:bg-green-300 text-black rounded-lg">
              main
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
