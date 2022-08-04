import Link from 'next/link';
import Image from 'next/image';
import { allPost } from './index';
import fs from 'fs';
import WorkCard from '../components/workCard';

export async function getStaticProps() {
    const files = fs.readdirSync('posts');
    const posts = allPost(files);
    return {
      props: {
        posts
      }
    };
  }

export default function HobbiesPage({ posts }) {
    return (
        <div className="margin-web column">
            <h2>Hobbies</h2>
            <p>Under construction👷🏻‍♀️</p>
            {/* <div className="cards">
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
            </div> */}
        </div>
    )
}