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
          <Text fontSize="1.2rem" p=".5rem" color="primary.600" fontWeight="bold">
            Nuestros productos
          </Text>

          <Flex
            display="grid"
            alignSelf="center"
            gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap=".5rem"
            borderRadius="10px"
          >

            <Flex flexDir="column" h="280px" w="195px" borderRadius="10px" bg="bg.subtle">
              <Flex position="relative">
                <Flex position="absolute" w="full" backdropFilter="blur(8px)" borderTopRadius="10px" px="4px" py="6px">
                  <Text
                    px="4px"
                    py="0rem"
                    color="white"
                    bg="primary.400"
                    borderRadius="4px"
                    letterSpacing="-1px"
                    fontSize="12px"
                    fontWeight="bold"
                  >
                    LAMPARAS
                  </Text>
                </Flex>
              </Flex>

              <Image
                  src="https://nicbia.com/uploads/products/1/10003-0.jpg"
                  alt=""
                  borderTopRadius="6px"
                  h="200px"
                />

              <Flex flexDir="column" bottom={0} w="full" p=".4rem">
                <Text fontWeight="bold" fontFamily="heading" fontSize="md" letterSpacing="-1px" color="black">
                  Lampara de interior
                </Text>
                <Text></Text>
              </Flex>
            </Flex>

            <Flex flexDir="column" h="280px" w="195px" borderRadius="10px" bg="bg.subtle">
              <Flex position="relative">
                <Flex position="absolute" w="full" backdropFilter="blur(8px)" borderTopRadius="10px" px="4px" py="6px">
                  <Text
                    px="4px"
                    py="0rem"
                    color="white"
                    bg="primary.400"
                    borderRadius="4px"
                    letterSpacing="-1px"
                    fontSize="12px"
                    fontWeight="bold"
                  >
                    LAMPARAS
                  </Text>
                </Flex>
              </Flex>

              <Image
                  src="https://nicbia.com/uploads/products/1/10003-0.jpg"
                  alt=""
                  borderTopRadius="6px"
                  h="200px"
                />

              <Flex flexDir="column" bottom={0} w="full" p=".4rem">
                <Text fontWeight="bold" fontFamily="heading" fontSize="md" letterSpacing="-1px" color="black">
                  Lampara de interior
                </Text>
                <Text></Text>
              </Flex>
            </Flex>

            <Flex flexDir="column" h="280px" w="195px" borderRadius="10px" bg="bg.subtle">
              <Flex position="relative">
                <Flex position="absolute" w="full" backdropFilter="blur(8px)" borderTopRadius="10px" px="4px" py="6px">
                  <Text
                    px="4px"
                    py="0rem"
                    color="white"
                    bg="primary.400"
                    borderRadius="4px"
                    letterSpacing="-1px"
                    fontSize="12px"
                    fontWeight="bold"
                  >
                    LAMPARAS
                  </Text>
                </Flex>
              </Flex>

              <Image
                  src="https://nicbia.com/uploads/products/1/10003-0.jpg"
                  alt=""
                  borderTopRadius="6px"
                  h="200px"
                />

              <Flex flexDir="column" bottom={0} w="full" p=".4rem">
                <Text fontWeight="bold" fontFamily="heading" fontSize="md" letterSpacing="-1px" color="black">
                  Lampara de interior
                </Text>
                <Text></Text>
              </Flex>
            </Flex>

            <Flex flexDir="column" h="280px" w="195px" borderRadius="10px" bg="bg.subtle">
              <Flex position="relative">
                <Flex position="absolute" w="full" backdropFilter="blur(8px)" borderTopRadius="10px" px="4px" py="6px">
                  <Text
                    px="4px"
                    py="0rem"
                    color="white"
                    bg="primary.400"
                    borderRadius="4px"
                    letterSpacing="-1px"
                    fontSize="12px"
                    fontWeight="bold"
                  >
                    LAMPARAS
                  </Text>
                </Flex>
              </Flex>

              <Image
                  src="https://nicbia.com/uploads/products/1/10003-0.jpg"
                  alt=""
                  borderTopRadius="6px"
                  h="200px"
                />

              <Flex flexDir="column" bottom={0} w="full" p=".4rem">
                <Text fontWeight="bold" fontFamily="heading" fontSize="md" letterSpacing="-1px" color="black">
                  Lampara de interior
                </Text>
                <Text></Text>
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
