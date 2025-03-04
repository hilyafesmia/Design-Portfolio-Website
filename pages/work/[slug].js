import fs from "fs";
import matter from "gray-matter";
import markdownit from "markdown-it";
import ShortInfo from "../../components/shortInfo";
import { useEffect, useRef } from "react";
import { clickHandler, scrollhandler } from "/utils/eventHandler";

import style from "../../styles/workDetail.module.css";
import StyledLink from "../../components/styledLink";
import classNames from "classnames";
import Head from "next/head";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts/work");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/work/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  const imgRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => clickHandler(e, imgRef));
    window.addEventListener("scroll", (e) => scrollhandler(e, imgRef));
    return () => {
      window.removeEventListener("click", (e) => clickHandler(e, imgRef));
      window.removeEventListener("scroll", (e) => scrollhandler(e, imgRef));
    };
  }, []);

  const imgBackground = {
    backgroundImage: "url(/" + `${frontmatter.previewImg}` + ")",
  };

  const md = markdownit({
    html: true,
  });

  md.use(require("markdown-it-container"), "highlight");
  const textStyle = classNames(style.startPos, "prose");

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div style={imgBackground} className={style.parallax} />
      <div className={style.shadow}>
        <div className={style.margin}>
          <div className={style.contentList}>
            <p>Quick Access</p>
            <StyledLink href="#overview">Overview</StyledLink>
            <StyledLink href="#objective">Objective</StyledLink>
            <StyledLink href="#design">Design</StyledLink>
            <StyledLink href="#result">Result</StyledLink>
          </div>
          <div className={textStyle}>
            <p>
              {frontmatter.company} • {frontmatter.scope} •{" "}
              {frontmatter.duration}
            </p>
            <h1>{frontmatter.title}</h1>
            <div
              id="overview"
              style={{ position: "relative", top: "-120px" }}
            />
            <div className={style.shortinfos}>
              <ShortInfo type={"What"} content={frontmatter.what} />
              <ShortInfo type={"Why"} content={frontmatter.why} />
              <ShortInfo type={"Impact"} content={frontmatter.impact} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
          </div>
        </div>
      </div>
    </>
  );
}
