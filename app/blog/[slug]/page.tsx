import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SEO from "../../../components/SEO";
import SocialShare from "../../../components/SocialShare";
import { getPostBySlug } from "../../../lib/posts";

interface Props {
  params: { slug: string };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound(); // ✅ Proper return to stop execution

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date
  };

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />
      <Breadcrumbs
        segments={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` }
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

