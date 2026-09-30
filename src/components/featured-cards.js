'use client';

import { Box, Card, Carousel, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

const items = [
  {
    title: 'Mision',
    category: '',
    description: 'Diseñar y fabricar artesanalmente elementos de decoración y mobiliario exclusivo de interior y exterior, fusionando materiales nobles con un diseño sofisticado que realce y otorgue personalidad a cada espacio.',
    detail: 'Madera maciza · 6 personas',
    color: 'primary.100',
  },
  {
    title: 'Visión',
    category: '',
    description: 'Posicionarse como la marca referente de diseño de autor y decoración artesanal de alta gama en la región, reconocida por la calidad noble de sus materiales, su innovación estética y el carácter exclusivo de cada pieza.',
    detail: 'Lino natural · 2 cuerpos',
    color: 'primary.100',
  },
  {
    title: 'Principios y valores',
    category: '',
    description: 'Pasión Artesanal (Craftsmanship): Cada pieza lleva la impronta del trabajo hecho a mano, garantizando personalidad y textura única.',
    detail: 'Roble natural · 4 estantes',
    color: 'primary.100',
  },
];

export default function FeaturedCards() {
  const slidesPerPage = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 1;

  return (
    <Box as="section" width="full" minW="0" bg="cream" py={{ base: 6, md: 12 }} px={{ base: 4, md: 8 }} aria-labelledby="featured-title">
      <Box maxW="1200px" mx="auto">
        <Heading id="featured-title" color="primary.700" mb="1rem" ml=".2rem">
          Inspiración para tu hogar
        </Heading>
        
        <Carousel.Root
          slideCount={items.length}
          slidesPerPage={slidesPerPage}
          slidesPerMove={1}
          spacing="24px"
          loop
          aria-label="Colección de ejemplo"
        >
          <Carousel.ItemGroup>
            {items.map((item, index) => (
              <Carousel.Item key={item.title} index={index}>
                <Card.Root height="full" bg="surface" borderColor="border" borderRadius="sm" overflow="hidden">
                  <Card.Header bg={item.color} py="3" px="4">
                    <Card.Title color="text" fontSize="1.3rem">{item.title}</Card.Title>
                  </Card.Header>
                  <Card.Body gap="4" p="6">
                    <Card.Description color="text-muted" fontSize="sm" lineHeight="tall">
                      {item.description}
                    </Card.Description>
                  </Card.Body>
                  <Card.Footer px="6" pb="6">
                    <Text color="primary.700" fontSize="sm">{item.detail}</Text>
                  </Card.Footer>
                </Card.Root>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.Control justifyContent="space-between" mt="4">
            <Text color="text-muted" fontSize="sm">Deslizá para explorar</Text>
            <Flex gap="2">
              <Carousel.PrevTrigger aria-label="Tarjeta anterior" boxSize="11" bg="primary.700" color="text-inverse" borderRadius="full" _hover={{ bg: 'primary.800' }}>
                ‹
              </Carousel.PrevTrigger>
              <Carousel.NextTrigger aria-label="Tarjeta siguiente" boxSize="11" bg="primary.700" color="text-inverse" borderRadius="full" _hover={{ bg: 'primary.800' }}>
                ›
              </Carousel.NextTrigger>
            </Flex>
          </Carousel.Control>
        </Carousel.Root>
      </Box>
    </Box>
  );
}
