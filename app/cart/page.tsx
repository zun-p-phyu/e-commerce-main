'use client';

import { Box, Container, Typography, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Link from '@/components/Link';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Your cart is empty
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Add items from the product pages to see them here.
        </Typography>
        <Button component={Link} href="/products" variant="contained">
          Browse products
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Shopping cart
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.productId}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ position: 'relative', width: 56, height: 56, flexShrink: 0, borderRadius: 1, overflow: 'hidden', bgcolor: 'grey.100' }}>
                      <Image src={item.image} alt={item.name} fill sizes="56px" style={{ objectFit: 'cover' }} />
                    </Box>
                    <Typography component={Link} href={`/products/${item.slug}`} fontWeight={500} sx={{ '&:hover': { textDecoration: 'underline' } }}>
                      {item.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                    <IconButton size="small" onClick={() => updateQuantity(item.productId, item.quantity - 1)}>
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography variant="body2" sx={{ minWidth: 24, textAlign: 'center' }}>
                      {item.quantity}
                    </Typography>
                    <IconButton size="small" onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="error" onClick={() => removeItem(item.productId)} aria-label="Remove">
                    <DeleteOutlined />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="h6">
            Total ({totalItems} {totalItems === 1 ? 'item' : 'items'}): ${totalPrice.toFixed(2)}
          </Typography>
          <Button component={Link} href="/products" variant="outlined" sx={{ mt: 2, mr: 1 }}>
            Continue shopping
          </Button>
          <Button component={Link} href="/checkout" variant="contained" sx={{ mt: 2 }}>
            Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
