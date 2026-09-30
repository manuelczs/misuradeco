import SiteNavigation from '../components/site-navigation';
import FeaturedCards from '../components/featured-cards';
import GallerySlider from '../components/gallery-slider';
import { Card, Image } from "@chakra-ui/react"
import { Flex, Text } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <>
      { false &&
        <Flex>
          <Image
            src="/workshop.png"
            alt="Workshop"
            width="full"
          />
          <Text>En construccion</Text>
        </Flex>
      }

      <Flex
        id="inicio"
        direction="column"
        align="center"
        justify="space-between"
        minHeight="100vh"
        bgGradient="linear(to-b, #f0f0f0, #e0e0e0)"
        maxW="1920px"
        w="full"
        margin="0 auto"
      >
        <SiteNavigation />

        <GallerySlider />
        <FeaturedCards />

        <Flex flexDir="column" id="acerca-de" scrollMarginTop="60px" bg="surface" flex="1" minH={['100vh']} width="100%" alignItems="start" pt="1rem">
          <Text p="1rem" color="red">Sss</Text>

          <Flex display="grid" alignSelf="center" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap=".8rem">
            <Flex position="relative" h="320px" w="190px">
              <Text position="absolute" w="full" color="white" bg="blackAlpha.800">Descripcion</Text>
              <Image src="https://nicbia.com/uploads/products/1/10003-0.jpg" alt="" />
              <Flex position="absolute" bottom={0}>
                <Text>Footer here</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex as="footer" id="contacto" scrollMarginTop="60px" bg="primary.100" minH="160px" width="100%" p={4} justifyContent="space-between">
          <Text color="white" fontSize="sm">
            &copy; 2023 Mi Aplicación. Todos los derechos reservados.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
