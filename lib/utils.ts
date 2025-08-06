import { getAllPosts } from "./posts";
import { getAllProducts } from "./products";

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const products = await getAllProducts();
  const set = new Set<string>();
  posts.forEach(p => p.categories.forEach(c => set.add(c)));
  products.forEach(p => p.categories.forEach(c => set.add(c)));
  return Array.from(set).sort();
}
