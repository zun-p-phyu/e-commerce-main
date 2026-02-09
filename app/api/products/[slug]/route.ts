import { NextResponse } from 'next/server';
import products from '@/data/products.json';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = products.find((p: { slug: string }) => p.slug === slug);
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}
