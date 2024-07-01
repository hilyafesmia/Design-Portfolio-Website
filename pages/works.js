import fs from "fs";
import WorkCard from "../components/workCard";
import retrievePosts from "../utils/retrievePosts";

export async function getStaticProps() {
  const files = fs.readdirSync("posts/work");
  const posts = retrievePosts(files, "work");
  return {
    props: {
      posts,
    },
  };
}

export default function WorksPage({ posts }) {
  return (
    <div className="margin-web column">
      <h1>Works</h1>
      <div className="cards">
        {posts
          .slice()
          .reverse()
          .map(({ slug, frontmatter }, index) => (
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
  );
}
