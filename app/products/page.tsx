import { Box, Container, Typography } from '@mui/material';
import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@/types';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Menu
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Coffee, pastries, and more. Click for details or add to cart.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
}
