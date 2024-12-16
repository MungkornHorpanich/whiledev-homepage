import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Footer from "./Footer";

interface PostProps {
  Mdcontent: any;
}

const Post: React.FC<PostProps> = ({ Mdcontent }) => {
  const [notloading, setNotLoading] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      setNotLoading(true);
    }, 500);
  }, []);

  return (
    <>
      {notloading ? (
        <article>
          <div className="dark:bg-[#202023] overflow-auto transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] bg-white ">
            <Navbar />
            <div className="pt-24 px-5 text-xl text-black dark:text-white max-w-2xl mx-auto md:max-w-3xl">
              <div className="prose prose-zinc dark:prose-invert !max-w-none">
                <Markdown
                  children={Mdcontent}
                  className="prose-pre:p-0 prose-pre:overflow-x-visible"
                  components={{
                    code(props) {
                      const { children, className, node, ...rest } = props;
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          PreTag="div"
                          children={String(children).replace(/\n$/, "")}
                          language={match[1]}
                          style={oneDark}
                        />
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      );
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <Footer />
        </article>
      ) : (
        <div className="h-screen w-screen bg-white dark:bg-[#202023]"></div>
      )}
    </>
  );
};

export default Post;
