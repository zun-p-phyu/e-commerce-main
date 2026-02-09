'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Typography, Button, Paper, Box } from '@mui/material';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import Link from '@/components/Link';

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') ?? '';

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Box sx={{ color: 'success.main', mb: 2 }}>
          <CheckCircleOutlined sx={{ fontSize: 64 }} />
        </Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Order confirmed
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Thank you for your order.
        </Typography>
        {orderId && (
          <Typography variant="body1" sx={{ fontFamily: 'monospace', mb: 2 }}>
            Order ID: {orderId}
          </Typography>
        )}
        <Button component={Link} href="/products" variant="contained" sx={{ mt: 2 }}>
          Continue shopping
        </Button>
      </Paper>
    </Container>
  );
}

function CheckoutSuccessFallback() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Box sx={{ color: 'success.main', mb: 2 }}>
          <CheckCircleOutlined sx={{ fontSize: 64 }} />
        </Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Order confirmed
        </Typography>
        <Typography color="text.secondary">Loading...</Typography>
      </Paper>
    </Container>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<CheckoutSuccessFallback />}>
      <CheckoutSuccessContent />
    </Suspense>
  );
}
