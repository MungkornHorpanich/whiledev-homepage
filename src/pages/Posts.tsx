import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import NextTutorial from "../../public/images (1).png";
import NextApollo from "../../public/next-apollo.png";

const Posts: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-[#202023] transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] min-h-screen bg-white overflow-auto">
      <Navbar />
      <div className="pt-20 max-w-4xl mx-auto pl-5 text-black dark:text-white">
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
            image={NextTutorial}
            title="How I learn Next.js in 5 days and how you can do it faster than me."
            description="In this post I'm sharing my experience of learning Next.js in only 5 days. I will also cover how you can learn Next.js even faster than me. and tips that I learn from learning Next.js and resources for finding knowledge about Next.js"
            path="learn-next-5days"
            catergory={[
              "react",
              "next.js",
              "web development",
              "typescript",
              "shadcn",
              "next-auth",
              "tailwindcss",
              "prisma",
            ]}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Posts;
