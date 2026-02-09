'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
  Container,
} from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Link from '@/components/Link';
import { useCart } from '@/context/CartContext';

export function Header() {
  const { totalItems } = useCart();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        boxShadow: '0 1px 3px rgba(14,165,233,0.12)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 64 } }}>
          <Typography
            component={Link}
            href="/"
            variant="h6"
            fontWeight={700}
            sx={{ color: 'primary.main', '&:hover': { color: 'primary.dark' } }}
          >
            ZunCafe
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Button component={Link} href="/" color="inherit" sx={{ color: 'text.primary' }}>
              Home
            </Button>
            <Button component={Link} href="/products" color="inherit" sx={{ color: 'text.primary' }}>
              Products
            </Button>
            <IconButton
              component={Link}
              href="/cart"
              aria-label="Cart"
              sx={{ color: 'primary.main' }}
            >
              <Badge badgeContent={totalItems} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
