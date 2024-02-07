import WorkCard from "../components/workCard";
import fs from "fs";
import retrievePosts from "../utils/retrievePosts";
import { useEffect } from "react";

export async function getStaticProps() {
  const files = fs.readdirSync("posts/work");
  const posts = retrievePosts(files, "work");
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  useEffect(() => {
    const content = document.querySelector("#content");

    repeatContent(content);

    var toLoop = document.querySelector("#loop");
    toLoop.innerHTML = toLoop.innerHTML + toLoop.innerHTML;

    function repeatContent(toLoop) {
      var html = toLoop.innerHTML;
      for (let counter = 0; counter < 10; counter++) {
        toLoop.innerHTML += html;
      }
    }
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <div className="intro-card">
          <h1>
            Hi, I&#39;m Hilya, a digital product designer based in Jakarta,
            Indonesia
          </h1>
          <h3>
            I&#39;m interested in digital product design and web development
          </h3>
        </div>
      </div>
      <div id="outer">
        <div id="loop">
          <div id="content"> Welcome </div>
        </div>
      </div>
      <div className="margin-web column">
        <h1>Past Works</h1>
        <div className="cards">
          {posts.toReversed().map(({ slug, frontmatter }, index) => (
            <WorkCard
              key={index}
              slug={slug}
              img={frontmatter.previewImg}
              duration={frontmatter.duration}
              scope={frontmatter.scope}
              title={frontmatter.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
