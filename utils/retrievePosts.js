import fs from 'fs';
import matter from 'gray-matter';

export default function retrievePosts(files, kind) {
    const allPost = files.map((fileName) => {
  
      const slug = fileName.replace('.md','');
      const readFile = fs.readFileSync(`posts/${kind}/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
    
      return {
        slug,
        frontmatter
      };
    })
    return allPost;
}