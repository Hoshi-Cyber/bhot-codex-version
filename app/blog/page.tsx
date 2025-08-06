import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import Breadcrumbs from "../../components/Breadcrumbs";
import SEO from "../../components/SEO";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
};

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <>
      <SEO title="Blog" description="Latest articles and reviews." />
      <Breadcrumbs
        segments={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      <h1 className="text-3xl font-bold mb-4">Blog</h1>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
                {post.title}
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
