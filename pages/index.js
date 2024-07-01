import WorkCard from "../components/workCard";
import fs from "fs";
import retrievePosts from "../utils/retrievePosts";
import Hero from "../components/hero";
import Works from "../components/works";
import style from "../styles/Index.module.css";
import Hobbies from "../components/hobbies";

export async function getStaticProps() {
  const workFiles = fs.readdirSync("posts/work");
  const works = retrievePosts(workFiles, "work");

  const hobbyFiles = fs.readdirSync("posts/hobby");
  const hobbies = retrievePosts(hobbyFiles, "hobby");

  return {
    props: {
      works,
      hobbies,
    },
  };
}

export default function Home({ works, hobbies }) {
  console.log("works", works);
  console.log("hobbs", hobbies);

  return (
    <div className={style.home}>
      <Hero />
      <Works posts={works} />
      <Hobbies posts={hobbies} />
      <div className="margin-web column">
        <h1>Past Works</h1>
        <div className="cards">
          {/* {posts &&
            posts
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
              ))} */}
        </div>
      </div>
    </div>
  );
}
