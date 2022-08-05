import Link from 'next/link';
import Image from 'next/image';
import { allPost } from './index';
import fs from 'fs';
import HobbyCard from '../components/hobbyCard';
import retrievePosts from '../utils/retrievePosts';

export async function getStaticProps() {
    const files = fs.readdirSync('posts/hobby');
    const posts = retrievePosts(files, 'hobby');
    return {
      props: {
        posts
      }
    };
}

export default function HobbiesPage({ posts }) {
    return (
        <div className="margin-web column">
            <h1>Hobbies</h1>
            <p>Under construction👷🏻‍♀️</p>
            <div className="cards">
            {posts.map(({slug, frontmatter}, index) => (
              <HobbyCard
                  key={index}
                  slug={slug}
                  img={frontmatter.previewImg}
                  type={frontmatter.type}
                  title={frontmatter.title}
                />
            ))}
            </div>
        </div>
    )
}