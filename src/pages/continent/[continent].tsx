import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Heading, useBreakpointValue, Wrap } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Continent/Hero";
import { ContinentData } from "../../components/Continent/ContinentData";
import { Card } from "../../components/Continent/Card";

export default function Continent() {
  const router = useRouter();
  const isWidescreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>worldtrip | Africa</title>
      </Head>

      <Header />
      <Box>
        <Hero title="Europa" imageUrl="/europe.jpg" />

        <ContinentData
          description="A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
        />

        <Box as="section" maxWidth={1280} mx="auto" px="8">
          <Heading mb="8">Cidades 100+</Heading>
          <Wrap
            spacing={isWidescreen ? "16" : "8"}
            justify={isWidescreen ? "flex-start" : "center"}
          >
            <Card
              city="Londres"
              country="Reino Unido"
              imageUrl="/asia.jpg"
              iconUrl="/icons/modern.svg"
            />

            <Card
              city="Londres"
              country="Reino Unido"
              imageUrl="/asia.jpg"
              iconUrl="/icons/modern.svg"
            />

            <Card
              city="Londres"
              country="Reino Unido"
              imageUrl="/asia.jpg"
              iconUrl="/icons/modern.svg"
            />

            <Card
              city="Londres"
              country="Reino Unido"
              imageUrl="/asia.jpg"
              iconUrl="/icons/modern.svg"
            />

            <Card
              city="Londres"
              country="Reino Unido"
              imageUrl="/asia.jpg"
              iconUrl="/icons/modern.svg"
            />
          </Wrap>
        </Box>
      </Box>
    </>
  );
}

//TODO:
//* Consume data from API
//* Responsiveness adjustments
