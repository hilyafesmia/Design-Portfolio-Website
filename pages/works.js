import fs from "fs";
import Card from "../components/Card";
import retrievePosts from "../utils/retrievePosts";
import Marquee from "../components/marquee";
import hero from "../styles/hero.module.css";
import style from "../styles/work.module.css";

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
    <div className={style.container}>
      <h1>
        <Marquee text="my works ✶ my works ✶ my works ✶ my works ✶ my works ✶ my works ✶ " />
      </h1>
      <div className={hero.margin}>
        <div className={style.cards}>
          {posts
            .slice()
            .reverse()
            .map(({ slug, frontmatter }, index) => (
              <Card
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
