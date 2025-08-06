import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
  contentHtml: string;
}

export async function getAllPosts(): Promise<Post[]> {
  const files = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    files.map(async file => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        categories: data.categories || [],
        contentHtml
      } as Post;
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    categories: data.categories || [],
    contentHtml
  };
}
