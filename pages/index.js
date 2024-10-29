import fs from "fs";
import retrievePosts from "../utils/retrievePosts";
import Hero from "../components/hero";
import WorkSection from "../components/workSection";
import style from "../styles/Index.module.css";
import Hobbies from "../components/hobbies";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={style.home}>
        <Hero />
        <WorkSection posts={works} />
        <Hobbies posts={hobbies} />
      </div>
    </>
  );
}
