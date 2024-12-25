import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import reacttutorial from "../../public/images.jpeg";

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
            image={reacttutorial}
            title="React + Typescritp Tutorial"
            description="A simple and easy step by step React with Typescirpt tutorial with examples. I work as a freelance Front-end Engineer."
            path="react-tutorial"
            catergory={["react", "web development", "typescript"]}
          />

          <Card
            image={reacttutorial}
            title="Example"
            description="Just basic example of using the custom components"
            path="react-tutorial"
            catergory={["react", "web development", "typescript"]}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Posts;
