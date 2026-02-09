'use client';

import { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@/types';

const INITIAL = 4;
const LOAD_MORE = 4;

export function FeaturedProducts({ products }: { products: Product[] }) {
  const [shown, setShown] = useState(INITIAL);
  const visible = products.slice(0, shown);
  const hasMore = shown < products.length;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Featured picks
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3,
          mt: 2,
        }}
      >
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
      {hasMore && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            onClick={() => setShown((n) => Math.min(n + LOAD_MORE, products.length))}
          >
            Load more
          </Button>
        </Box>
      )}
    </Container>
  );
}
