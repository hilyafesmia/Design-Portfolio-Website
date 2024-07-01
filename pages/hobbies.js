import fs from "fs";
import retrievePosts from "../utils/retrievePosts";
import Marquee from "../components/marquee";
import hero from "../styles/hero.module.css";
import WorkCard from "../components/workCard";

export async function getStaticProps() {
  const files = fs.readdirSync("posts/hobby");
  const posts = retrievePosts(files, "hobby");
  return {
    props: {
      posts,
    },
  };
}

export default function HobbiesPage({ posts }) {
  return (
    <div style={{ paddingTop: "280px" }}>
      <h1>
        <Marquee text="my hobbies ✶ my hobbies ✶ " />
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
                scope={frontmatter.type}
                title={frontmatter.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
