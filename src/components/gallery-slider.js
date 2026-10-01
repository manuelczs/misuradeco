'use client';

import { Box, Carousel, Image, Text } from '@chakra-ui/react';

const slides = ['/slide_1.webp', '/slide_2.webp'];

export default function GallerySlider() {
  return (
    <Carousel.Root
      slideCount={slides.length}
      loop
      width="full"
      height={["340px", "580px"]}
      overflow="hidden"
      position="relative"
      aria-label="Galería"
    >
      <Carousel.ItemGroup height="full" minH="0" overflowY="hidden">
        {slides.map((src, index) => (
          <Carousel.Item key={src} index={index} height="full" overflow="hidden">
            <Image
              src={src}
              alt={`Galería Misura Deco, imagen ${index + 1}`}
              width="full"
              height="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      
      <Carousel.Control
        position="absolute"
        bottom="4"
        insetX="0"
        justifyContent="center"
        gap="4"
      >
        <Carousel.PrevTrigger
          aria-label="Imagen anterior"
          bg="surface"
          color="primary.700"
          boxSize="10"
          borderRadius="full"
        >
          ‹
        </Carousel.PrevTrigger>
        <Carousel.IndicatorGroup gap="2">
          {slides.map((src, index) => (
            <Carousel.Indicator
              key={src}
              index={index}
              aria-label={`Ir a imagen ${index + 1}`}
              boxSize="3"
              bg="surface"
              _current={{ bg: 'primary.500' }}
            />
          ))}
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger
          aria-label="Imagen siguiente"
          bg="surface"
          color="primary.700"
          boxSize="10"
          borderRadius="full"
        >
          ›
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
}
