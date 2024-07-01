import fs from "fs";
import retrievePosts from "../utils/retrievePosts";
import Marquee from "../components/marquee";
import hero from "../styles/hero.module.css";
import Card from "../components/Card";
import work from "../styles/work.module.css";

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
    <div className={work.container}>
      <h1>
        <Marquee text="my hobbies ✶ my hobbies ✶ " />
      </h1>
      <div className={hero.margin}>
        <div className={work.cards}>
          {posts
            .slice()
            .reverse()
            .map(({ slug, frontmatter }, index) => (
              <Card
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
