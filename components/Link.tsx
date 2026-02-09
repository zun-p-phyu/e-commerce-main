'use client';

import NextLink, { LinkProps } from 'next/link';

export default function Link(props: LinkProps & { children?: React.ReactNode }) {
  return <NextLink {...props} />;
}
