import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import NextApollo from "../../public/next-apollo.png";
import MacOS from "../../public/macOS.png";

const Posts: React.FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] min-h-screen bg-white overflow-auto">
         <Navbar />
         <div className="pt-20 max-w-4xl mx-auto md:px-0 px-5 text-black dark:text-white">
            <h1 className="text-xl md:text-2xl font-medium">Posts</h1>
            <div className="grid text-black dark:text-white grid-cols-1 gap-3 mt-4 md:grid-cols-2 md:px-3 md:py-2">
               <Card
                  image={NextApollo}
                  title="Why GraphQL with Apollo Server Feels Like Overkill for Smaller SaaS Projects and Next.js is better for SaaS."
                  description="In this post I'm covering why I switched from GraphQL, Apollo Server with TypeORM to Next. js with Prisma"
                  path="next-vs-apollo"
                  catergory={[
                     "react",
                     "next.js",
                     "typescript",
                     "graphql",
                     "apollo-server",
                     "prisma",
                     "typeorm",
                  ]}
               />

               <Card
                  image={MacOS}
                  title="The Ultimate macOS Workflow for Power Users: My Tools and Setup"
                  description="Switching from Yabai to Aerospace has transformed my macOS workflow. In this post, I explain how Aerospace, combined with Ghostty Terminal, Tmux, and SketchyBar, creates a powerful and efficient setup for maximizing productivity."
                  path="macos-workflow"
                  catergory={[
                     "macos",
                     "window management",
                     "productivity",
                     "aerospace",
                     "terminal",
                     "tmux",
                     "sketchybar",
                     "ghostty",
                  ]}
               />
            </div>

            <Footer />
         </div>
      </div>
   );
};

export default Posts;
