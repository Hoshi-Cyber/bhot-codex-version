import fs from "fs";
import path from "path";
import matter from "gray-matter";

const productsDirectory = path.join(process.cwd(), "content/products");

export interface Product {
  slug: string;
  title: string;
  price: string;
  link: string;
  excerpt: string;
  features: string[];
  categories: string[];
}

export async function getAllProducts(): Promise<Product[]> {
  const files = fs.readdirSync(productsDirectory);
  return files.map(file => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(productsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      price: data.price,
      link: data.link,
      excerpt: data.excerpt,
      features: data.features || [],
      categories: data.categories || []
    } as Product;
  });
}
