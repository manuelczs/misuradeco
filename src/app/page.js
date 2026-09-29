import FeaturedCards from '../components/featured-cards';
import GallerySlider from '../components/gallery-slider';
import { Image } from "@chakra-ui/react"
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
        direction="column"
        align="center"
        justify="space-between"
        minHeight="100vh"
        bgGradient="linear(to-b, #f0f0f0, #e0e0e0)"
        maxW="1920px"
        w="full"
        margin="0 auto"
      >
        <Flex as="nav" position="fixed" zIndex="100" bg="site.background" height="60px" maxW="1920px" width="100%" p={4} justifyContent="space-between" alignItems="center">
          <Text color="white" fontSize="xl" fontWeight="bold" letterSpacing="-1px">
            MisuraDeco
          </Text>
          <Flex>
            <Text color="white" mx={2} cursor="pointer">
              Inicio
            </Text>
            <Text color="white" mx={2} cursor="pointer">
              Acerca de
            </Text>
            <Text color="white" mx={2} cursor="pointer">
              Contacto
            </Text>
          </Flex>
        </Flex>

        <GallerySlider />
        <FeaturedCards />

        <Flex bg="surface" flex="1" minH={['100vh']} width="100%" alignItems="center" justifyContent="center">
          <Text fontSize="2xl" mt={4} fontfamily="fonts.body" color="primary.700">
            Bienvenido a nuestra aplicación
          </Text>
        </Flex>

        <Flex as="footer" bg="primary.100" minH="160px" width="100%" p={4} justifyContent="space-between">
          <Text color="white" fontSize="sm">
            &copy; 2023 Mi Aplicación. Todos los derechos reservados.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
