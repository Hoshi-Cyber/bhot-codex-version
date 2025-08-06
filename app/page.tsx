import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
import AffiliateCTA from "../components/AffiliateCTA";
import SEO from "../components/SEO";
import { getAllPosts } from "../lib/posts";
import { getAllProducts } from "../lib/products";

export default async function HomePage() {
  const posts = await getAllPosts();
  const products = await getAllProducts();
  return (
    <>
      <SEO title="Best Home Office Tech" description="Find the best gear for your workspace." />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }]} />
      <h1 className="text-3xl font-bold mb-4">Welcome to Best Home Office Tech</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Latest Posts</h2>
        <ul className="space-y-2">
          {posts.slice(0, 3).map(post => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Featured Products</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {products.slice(0, 2).map(prod => (
            <ProductCard key={prod.slug} product={prod} />
          ))}
        </div>
      </section>
      <section className="mt-8">
        <AffiliateCTA />
      </section>
    </>
  );
}
