import fs from "fs";
import matter from "gray-matter";
import markdownit from "markdown-it";
import ShortInfo from "../../components/shortInfo";
import { useEffect, useRef } from "react";
import { clickHandler, scrollhandler } from "/utils/eventHandler";

import style from "../../styles/workDetail.module.css";
import StyledLink from "../../components/styledLink";

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

  return (
    <>
      <div style={imgBackground} className={style.parallax} />

      <div className={style.shadow}>
        <div className={style.margin}>
          <div className={style.contentList}>
            <p>Quick Access</p>
            <StyledLink href="#overview">Overview</StyledLink>
            <StyledLink href="#process">Process</StyledLink>
            <StyledLink href="#result">Result</StyledLink>
          </div>
          <div style={{ marginTop: "-160px" }} className="prose">
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.desc}</h3>
            <div className={style.shortinfos}>
              <ShortInfo type={"Company"} content={frontmatter.company} />
              <ShortInfo type={"Role"} content={frontmatter.role} />
              <ShortInfo type={"Scope"} content={frontmatter.scope} />
              <ShortInfo type={"Duration"} content={frontmatter.duration} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
          </div>
        </div>
      </div>
    </>
  );
}
