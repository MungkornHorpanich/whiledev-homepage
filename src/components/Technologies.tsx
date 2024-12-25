import React from "react";
import Tech from "./Tech";

const Technologies: React.FC = () => {
  return (
    <div>
      <div className="md:grid md:gap-3 mt-3 md:grid-cols-4 flex flex-col gap-2">
        {/* Typescript */}
        {/* https://andrijaweb.vercel.app/imgs/logos/typescript.svg | [#3178c6]/20 */}
        <Tech
          name="Typescript"
          bgColor="bg-[#3178c6]/20"
          fileUrl="https://andrijaweb.vercel.app/imgs/logos/typescript.svg"
          catergory={["main"]}
        />

        <Tech
          name="React"
          bgColor="bg-[#61DAFB]/20"
          fileUrl="https://andrijaweb.vercel.app/imgs/logos/react.svg"
          catergory={["main"]}
        />

        <Tech
          name="Tailwind"
          bgColor="bg-[#0EA5E9]/20"
          fileUrl="https://andrijaweb.vercel.app/imgs/logos/tailwind.svg"
          catergory={["main"]}
        />

        <Tech
          name="GraphQL"
          fileUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
          bgColor="bg-[#e535ab]/20"
          catergory={["main"]}
        />

        <Tech
          name="Python"
          fileUrl="https://img.icons8.com/?size=512&id=13441&format=png"
          bgColor="bg-[#4584b6]/20"
          catergory={["secondary"]}
        />

        <Tech
          name="PostgreSQL"
          fileUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
          bgColor="bg-[#336791]/20"
          catergory={["database"]}
        />

        <Tech
          name="Docker"
          fileUrl="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
          bgColor="bg-[#1D63ED]/20"
          catergory={["tools"]}
        />

        <Tech
          name="Git"
          fileUrl="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          bgColor="bg-[#F1502F]/20"
          catergory={["tools"]}
        />

        {/* */}
      </div>
    </div>
  );
};

export default Technologies;
