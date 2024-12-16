import React, { useEffect, useState } from "react";
import Post from "../../components/Post";

const ReactTutorial: React.FC = () => {
  const [content, setContent] = useState<string>(``);

  useEffect(() => {
    // Fetch the Markdown file from the public folder
    fetch("/posts/firstpost.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => setContent(data))
      .catch((error) => console.error(error));

    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Post Mdcontent={content} />
    </div>
  );
};

export default ReactTutorial;
