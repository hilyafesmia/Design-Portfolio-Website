import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import ShortInfo from '../../components/shortInfo';
import Image from 'next/image'
import { useEffect, useRef } from "react";

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
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
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

const enlarge = (target, imgRef) => {
  const { innerWidth, innerHeight } = window;
  const { x, y, width, height } = target.getBoundingClientRect();
  const targetX = innerWidth / 2 - x - width / 2;
  const targetY = innerHeight / 2 - y - height / 2;
  const fitToScreen = (Math.min(innerWidth, innerHeight) * 0.8) / height;

  imgRef.current = target;
  imgRef.current.parentElement.classList.add("activeImg");
  imgRef.current.style.cursor = "zoom-out";
  imgRef.current.style.transform = `translate(${targetX}px, ${targetY}px) scale(${fitToScreen})`;
  imgRef.current.style.zIndex = "100";
};

const revert = (imgRef) => {
  imgRef.current.parentElement.classList.remove("activeImg");
  imgRef.current.style.removeProperty("cursor");
  imgRef.current.style.removeProperty("transform");
  imgRef.current.style.removeProperty("z-index");
  imgRef.current = null;
};

const clickHandler = (e, imgRef) => {
  if (imgRef.current) {
    revert(imgRef);
  } else {
    const targetType = e.target.nodeName;
    if (targetType == "IMG") {
      enlarge(e.target, imgRef);
    }
  }
};

const scrollhandler = (e, imgRef) => {
  if (imgRef.current != null) {
    revert(imgRef);
  }
};

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
    <div 
          style={imgBackground}
          className="parallax"
    />
    <div className='prose'>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.desc}</h3>
      <div className="shortinfos">
        <ShortInfo
          type={'Company'}
          content={frontmatter.company}
        />
        <ShortInfo
          type={'Role'}
          content={frontmatter.role}
        />
        <ShortInfo
        type={'Scope'}
        content={frontmatter.scope}
      />
      <ShortInfo
        type={'Duration'}
        content={frontmatter.duration}
      />
      </div>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
    </>
  );
}
