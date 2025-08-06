import Breadcrumbs from "../../components/Breadcrumbs";
import SEO from "../../components/SEO";
import { getAllProducts } from "../../lib/products";

export default async function ComparePage() {
  const products = await getAllProducts();
  return (
    <>
      <SEO title="Compare Products" description="Side-by-side product comparison." />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Compare", href: "/compare" }]} />
      <h1 className="text-3xl font-bold mb-4">Compare Products</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead>
            <tr>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Features</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.slug} className="border-t">
                <td className="p-2">
                  <a href={p.link} target="_blank" rel="nofollow noopener" className="text-blue-600 underline">
                    {p.title}
                  </a>
                </td>
                <td className="p-2">{p.price}</td>
                <td className="p-2">{p.features.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
