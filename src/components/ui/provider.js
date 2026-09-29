'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { system } from '../../lib/theme';

export function Provider({ children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
