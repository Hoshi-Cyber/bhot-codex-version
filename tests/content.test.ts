import { describe, it, expect } from "vitest";
import { getAllPosts } from "../lib/posts";
import { getAllProducts } from "../lib/products";

describe("content loaders", () => {
  it("loads posts", async () => {
    const posts = await getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
  });

  it("loads products", async () => {
    const products = await getAllProducts();
    expect(products.length).toBeGreaterThan(0);
  });
});
