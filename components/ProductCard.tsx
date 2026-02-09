'use client';

import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import Link from '@/components/Link';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
  };

  return (
    <Card
      component={Link}
      href={`/products/${product.slug}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(111,78,55,0.15)',
        },
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '75%', overflow: 'hidden', bgcolor: 'grey.100' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="overline" color="primary" fontWeight={600}>
          {product.category}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2" noWrap>
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary.main" fontWeight={700}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleAddToCart}
          size="medium"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
