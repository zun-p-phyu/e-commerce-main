'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Link from '@/components/Link';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2 }}>
          <Typography variant="body2">© {new Date().getFullYear()} ZunCafe. All rights reserved.</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <MuiLink component={Link} href="/" color="inherit" underline="hover" variant="body2">
              Home
            </MuiLink>
            <MuiLink component={Link} href="/products" color="inherit" underline="hover" variant="body2">
              Products
            </MuiLink>
            <MuiLink component={Link} href="/cart" color="inherit" underline="hover" variant="body2">
              Cart
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
