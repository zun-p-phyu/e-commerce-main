import { notFound } from 'next/navigation';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from '@/components/Link';
import { AddToCartButton } from '@/app/products/[slug]/AddToCartButton';
import { getProductBySlug } from '@/lib/products';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        component={Link}
        href="/products"
        variant="body2"
        color="text.secondary"
        sx={{ display: 'inline-block', mb: 2, '&:hover': { color: 'primary.main' } }}
      >
        ← Back to products
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          alignItems: 'start',
        }}
      >
        <Box sx={{ position: 'relative', paddingTop: '100%', bgcolor: 'grey.100', borderRadius: 2, overflow: 'hidden' }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>
        <Box>
          <Typography variant="overline" color="primary" fontWeight={600}>
            {product.category}
          </Typography>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="primary.main" fontWeight={700} sx={{ mb: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            In stock: {product.stock}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <AddToCartButton product={product} />
            <Button component={Link} href="/products" variant="outlined">
              Continue shopping
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
