import { Box, Container, Typography, Button } from '@mui/material';
import Link from '@/components/Link';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { getProducts } from '@/lib/products';

export default async function HomePage() {
  const products = getProducts();

  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #EDE4D9 0%, #F5F0E8 50%, #FFFEF9 100%)',
          py: 8,
          px: 2,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} color="primary.dark" gutterBottom>
            Welcome to ZunCafe
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Fresh coffee, beans, and pastries. Order online.
          </Typography>
          <Button
            component={Link}
            href="/products"
            variant="contained"
            size="large"
            sx={{ px: 4 }}
          >
            Shop now
          </Button>
        </Container>
      </Box>

      <FeaturedProducts products={products} />
    </>
  );
}
