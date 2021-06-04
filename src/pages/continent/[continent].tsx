import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  Wrap,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";

export default function Continent() {
  const router = useRouter();
  const isWidescreen = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Head>
        <title>worldtrip | Africa</title>
      </Head>

      <Header />
      <Box>
        <Flex
          as="section"
          backgroundImage="url('/europe.jpg')"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          h={["150", "300", "500"]}
          align={isWidescreen ? "flex-end" : "center"}
          justify={isWidescreen ? "flex-start" : "center"}
        >
          <Text
            color="gray.50"
            fontSize="48"
            fontWeight="semibold"
            mx="24"
            my="12"
          >
            Europa
          </Text>
        </Flex>

        <Flex
          spacing="28"
          maxWidth={1280}
          mx="auto"
          py="24"
          px="8"
          direction={isWidescreen ? "row" : "column"}
          justify="space-between"
        >
          <Text fontSize="24" flex="1">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex flex="1" align="center" justify="center">
            <Text>Hello</Text>
          </Flex>
        </Flex>

        <Box as="section" maxWidth={1280} mx="auto" px="8">
          <Heading>Cidades 100+</Heading>
          <Wrap spacing="24">
            <Box
              w="64"
              h="64"
              borderRadius={8}
              border="solid"
              borderWidth={1}
              borderColor="yellow.800"
            >
              <Image src="/america.jpg" alt="image" w="100%" />
              <HStack justify="space-between" align="center" p="4">
                <Box>
                  <Heading fontSize="22">Londres</Heading>
                  <Text fontSize="14">Reino Unido</Text>
                </Box>
                <Image src="/icons/modern.svg" alt="flag" w="4" />
              </HStack>
            </Box>
          </Wrap>
        </Box>
      </Box>
    </>
  );
}

//TODO:
//* Componentize entire page?
//* Consume data from API
//* Layout adjustments
