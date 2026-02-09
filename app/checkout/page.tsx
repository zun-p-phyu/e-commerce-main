'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
  Divider,
} from '@mui/material';
import Link from '@/components/Link';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (items.length === 0 && typeof window !== 'undefined') {
    return (
      <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Your cart is empty
        </Typography>
        <Button component={Link} href="/products" variant="contained" sx={{ mt: 2 }}>
          Browse products
        </Button>
      </Container>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim(),
          address: address.trim(),
          items,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to place order.');
        setLoading(false);
        return;
      }
      clearCart();
      router.push(`/checkout/success?orderId=${encodeURIComponent(data.orderId)}`);
      router.refresh();
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Checkout
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Total: {totalItems} {totalItems === 1 ? 'item' : 'items'} — ${totalPrice.toFixed(2)}
      </Typography>
      <Paper sx={{ p: 4 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            autoComplete="name"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            autoComplete="email"
          />
          <TextField
            fullWidth
            label="Shipping address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            margin="normal"
            multiline
            rows={3}
            placeholder="Street, city, postal code"
            autoComplete="street-address"
          />
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Order total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? 'Placing order…' : 'Place order'}
          </Button>
        </Box>
        <Button component={Link} href="/cart" fullWidth sx={{ mt: 2 }} color="inherit">
          Back to cart
        </Button>
      </Paper>
    </Container>
  );
}
