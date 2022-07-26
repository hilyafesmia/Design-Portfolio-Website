import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import ShortInfo from '../../components/shortInfo';

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

export default function PostPage({ frontmatter, content }) {
  return (
    <>
    <div className="parallax img height">
    </div>
    <div className='prose mx-auto margin-web'>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.desc}</h3>
      <div className="cards">
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
