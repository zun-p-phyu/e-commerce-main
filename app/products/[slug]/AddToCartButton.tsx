'use client';

import { Button } from '@mui/material';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/types';

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <Button
      variant="contained"
      size="large"
      onClick={() =>
        addItem({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          slug: product.slug,
        })
      }
    >
      Add to cart
    </Button>
  );
}
