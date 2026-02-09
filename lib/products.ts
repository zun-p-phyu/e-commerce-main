import type { Product } from '@/types';
import productsData from '@/data/products.json';

const products = productsData as Product[];

export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | null {
  return products.find((p) => p.slug === slug) ?? null;
}
