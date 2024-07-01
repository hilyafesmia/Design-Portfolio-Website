import fs from "fs";
import WorkCard from "../components/workCard";
import retrievePosts from "../utils/retrievePosts";
import Marquee from "../components/marquee";
import hero from "../styles/hero.module.css";

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
    <div style={{ paddingTop: "280px" }}>
      <h1>
        <Marquee text="my works ✶ my works ✶ " />
      </h1>
      <div className={hero.margin}>
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
