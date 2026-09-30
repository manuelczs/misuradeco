"use client";

import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Acerca de', href: '#acerca-de' },
  { label: 'Contacto', href: '#contacto' },
];

export default function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const navigation = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!navigation.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <Flex
      ref={navigation}
      as="nav"
      aria-label="Navegación principal"
      position="fixed"
      zIndex="100"
      bg="site.background"
      height="60px"
      maxW="1920px"
      width="100%"
      p={4}
      justifyContent="space-between"
      alignItems="center"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <Text color="white" fontSize="xl" fontWeight="bold" letterSpacing="-1px">
        MisuraDeco
      </Text>
      <Flex display={{ base: 'none', md: 'flex' }}>
        {links.map(({ label, href }) => (
          <Text key={href} as="a" href={href} color="white" mx={2} cursor="pointer">
            {label}
          </Text>
        ))}
      </Flex>
      <Flex
        ref={toggle}
        as="button"
        type="button"
        display={{ base: 'flex', md: 'none' }}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        align="center"
        justify="center"
        width="44px"
        height="44px"
        color="white"
        cursor="pointer"
        borderRadius="md"
        _hover={{ bg: 'whiteAlpha.100' }}
        _focusVisible={{ outline: '2px solid', outlineColor: 'site.accent', outlineOffset: '2px' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M3 6h18M3 12h18M3 18h18'} />
        </svg>
      </Flex>
      <Box
        id="mobile-navigation"
        hidden={!open}
        display={{ base: open ? 'block' : 'none', md: 'none' }}
        position="absolute"
        top="100%"
        left="0"
        width="full"
        bg="site.background"
        borderTopWidth="1px"
        borderColor="site.footerBorder"
        p={2}
        boxShadow="lg"
      >
        {links.map(({ label, href }) => (
          <Box
            key={href}
            as="a"
            href={href}
            display="block"
            color="white"
            px={4}
            py={3}
            borderRadius="md"
            _hover={{ bg: 'whiteAlpha.100' }}
            _focusVisible={{ outline: '2px solid', outlineColor: 'site.accent' }}
            onClick={() => setOpen(false)}
          >
            {label}
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
