import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import ShortInfo from '../../components/shortInfo';
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { clickHandler, scrollhandler } from "/utils/eventHandler";

export async function getStaticPaths() {
  const files = fs.readdirSync('posts/hobby');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/hobby/${slug}.md`, 'utf-8');
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
    backgroundImage: "url(/" + `${frontmatter.previewImg}` + ")"
  }

  return (
    <>
    <div className='prose'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
    </>
  );
}
