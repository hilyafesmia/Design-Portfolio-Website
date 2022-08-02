import styles from '../styles/Home.module.css'
import WorkCard from '../components/workCard';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md','');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter
    };
  })

  return {
    props: {
      posts
    }
  };
}

export default function Home({ posts }) {
  return (
    <div className="img parallax">
      <div className="hero">
        <h1>Lorem ipsum dolor sit amet</h1>
      </div>
      <div className="height">
      </div>
      <div className="works">
        <h2>Past Works</h2>
        <div className="cards">
          {posts.map(({slug, frontmatter}, index) => (
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
  )
}
