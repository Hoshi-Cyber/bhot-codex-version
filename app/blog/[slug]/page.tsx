import Breadcrumbs from "../../../components/Breadcrumbs";
import SEO from "../../../components/SEO";
import SocialShare from "../../../components/SocialShare";
import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
  };

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />
      <Breadcrumbs
        segments={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <article className="prose dark:prose-invert max-w-none">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
      <SocialShare title={post.title} url={`/blog/${post.slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
