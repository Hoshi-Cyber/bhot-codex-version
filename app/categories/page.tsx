import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import SEO from "../../components/SEO";
import { getAllCategories } from "../../lib/utils";

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  return (
    <>
      <SEO title="Categories" description="Browse all categories." />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Categories", href: "/categories" }]} />
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        {categories.map(cat => (
          <li key={cat}>
            <Link href={`/categories/${cat}`} className="text-blue-600 underline">
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
