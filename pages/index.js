import WorkCard from "../components/workCard";
import fs from "fs";
import retrievePosts from "../utils/retrievePosts";
import Hero from "../components/hero";

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
  return (
    <div className="home">
      <Hero />
      <div className="margin-web column">
        <h1>Past Works</h1>
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
    </div>
  );
}
