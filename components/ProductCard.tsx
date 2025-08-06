interface Product {
  title: string;
  excerpt: string;
  price: string;
  link: string;
  features: string[];
  slug: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded">
      <h3 className="text-xl font-semibold mb-2">
        <a
          href={product.link}
          target="_blank"
          rel="nofollow noopener"
          className="underline"
        >
          {product.title}
        </a>
      </h3>
      <p className="mb-2">{product.excerpt}</p>
      <p className="mb-2 font-bold">{product.price}</p>
      <ul className="list-disc ml-5 mb-2">
        {product.features.map(f => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
